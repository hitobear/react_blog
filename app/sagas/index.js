import {fork} from 'redux-saga/effects'
import {saveBlogFlow} from './adminPublish'
import {getBlogListFlow,deleteBlogFlow,editBlogFlow} from './adminBlogs'
import {getFrontBlogListFlow} from './front'
import {getTagListFlow,saveTagFlow} from './tag'
export default function* rootSaga() {
    yield fork(saveBlogFlow);
    yield fork(getBlogListFlow);
    yield fork(deleteBlogFlow);
    yield fork(editBlogFlow);
    yield fork(getFrontBlogListFlow);
    yield fork(getTagListFlow);
    yield fork(saveTagFlow);
}
