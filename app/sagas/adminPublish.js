import {take, call, put,select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as PublishActionTypes} from '../reducers/adminPublish'

export function* saveBlog(data) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        let id = yield select(state=>state.admin.publish.id);
        console.log('idaaa,',id);
        if(id){
            data.id = id;
            return yield call(post, '/admin/blog/updateBlog', data);
        }else{
            return yield call(post, '/admin/blog/addBlog', data);
        }

    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* saveBlogFlow() {
    while (true) {
        let request = yield take(PublishActionTypes.SAVE_BLOG);
        if (request.data.title === '') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章标题', msgType: 0});
        } else if (request.data.content === "") {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章内容', msgType: 0});
        } else if (request.data.description === "") {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章描述', msgType: 0});
        }
        console.log('requestdata%o',request.data)
        if (request.data.title && request.data.content) {
            let res = yield call(saveBlog, request.data);
            if (res) {
                if (res.code === 0) {
                    yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
                    setTimeout(function () {
                        
                    }, 1000);
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
}