import {take, call, put,select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as TagActionTypes} from '../reducers/tag'

export function* saveTag(data) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        if(data.id){
            data.id = id;
            return yield call(post, '/admin/tag/update', data);
        }else{
            return yield call(post, '/admin/tag/add', data);
        }

    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
        yield put({type: TagActionTypes.HIDE_MODAL})
        yield put({type: TagActionTypes.GET_TAG_LIST})
    }
}

export function* saveTagFlow() {
    while (true) {
        let request = yield take(TagActionTypes.SAVE_TAG);
        if (request.data.name) {
            let res = yield call(saveTag, request.data);
            if (res) {
                if (res.code === 0) {
                    yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
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

export function* getTagList () {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `admin/tag/list`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* getTagListFlow () {
    while (true){
        let req = yield take(TagActionTypes.GET_TAG_LIST);
        let res = yield call(getTagList);
        if(res){
            if (res.code === 0) {
                yield put({type:TagActionTypes.RESPONSE_GET_TAG_LIST,data:res.data})
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

export function* delTag(id) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/admin/tag/del?id=${id}`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* delTagFlow() {
    while (true){
        let req = yield take(TagActionTypes.DELETE_TAG);
        let res = yield call(delTag,req.data.id);
        if (res.code === 0) {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
            yield put({type:TagActionTypes.GET_TAG_LIST});
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