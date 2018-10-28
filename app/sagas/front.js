import {take,call,put,select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionTypes as BlogTypes} from '../reducers/front'
import {actionsTypes as IndexActionTypes} from '../reducers'

export function* getBlogList (pageNum) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `admin/blog/list?pageNum=${pageNum}&isPublish=false`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* getFrontBlogListFlow () {
    while (true){
        let req = yield take(BlogTypes.GET_FRONT_BLOG_LIST);
        let res = yield call(getBlogList,1);
        if(res){
            if (res.code === 0) {
                res.data.pageNum = req.pageNum;
                yield put({type: BlogTypes.RESPONSE_GET_FRONT_BLOG_LIST,data:res.data})
            } else if (res.message === '身份信息已过期，请重新登录') {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
                setTimeout(function () {
                    location.replace('/');
                }, 1000);
            } else {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
            }
        }
    }
}