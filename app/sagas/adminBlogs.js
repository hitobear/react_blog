import {take,call,put,select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as BlogTypes} from '../reducers/adminBlogs'
import {actionTypes as PublishTypes} from '../reducers/adminPublish'



export function* deleteBlog (id) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/admin/blog/delete?id=${id}`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* deleteBlogFlow () {
    while(true){
        let req = yield take(BlogTypes.DELETE_Blog);
        const pageNum = yield select(state=>state.admin.articles.pageNum);
        let res = yield call(deleteArticle,req.id);
        if(res){
            if (res.code === 0) {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '删除成功!', msgType: 1});
                yield put({type:BlogTypes.GET_BLOG_LIST,pageNum})
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

export function* editBlog (id) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/getBlog?id=${id}`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* editBlogFlow () {
    while (true){
        let req = yield take(BlogTypes.EDIT_Blog);
        let res = yield call(editBlog,req.id);
        if(res){
            if (res.code === 0) {
                let {title,content,description,_id,...rest} = res.data;
                console.log('res.data...%o',res.data)
                yield put({type:PublishTypes.UPDATING_ID,id:_id});
                yield put({type:PublishTypes.UPDATING_DESCRIPTION,description});
                yield put({type:PublishTypes.UPDATING_CONTENT,content});
                yield put({type:PublishTypes.UPDATING_TITLE,title});
                yield put({type:PublishTypes.UPDATING_DATA,...rest});
            } else {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
            }
        }
    }
}

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

export function* getBlogListFlow () {
    while (true){
        let req = yield take(BlogTypes.GET_Blog_LIST);
        let res = yield call(getBlogList,req.pageNum);
        if(res){
            if (res.code === 0) {
                res.data.pageNum = req.pageNum;
                yield put({type:BlogTypes.RESPONSE_GET_Blog_LIST,data:res.data})
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

