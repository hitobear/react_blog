import {fork} from 'redux-saga/effects'
import {saveBlogFlow} from './adminPublish'
import {getBlogListFlow,deleteBlogFlow,editBlogFlow} from './adminBlogs'

export default function* rootSaga() {
    yield fork(saveBlogFlow);
    yield fork(getBlogListFlow);
    yield fork(deleteBlogFlow);
    yield fork(editBlogFlow);
}
