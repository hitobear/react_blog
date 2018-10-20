import {reducer as publish} from "./adminPublish";
import {combineReducers} from 'redux';
import {blogs} from "./adminBlogs"

const admin = combineReducers({
    blogs,
    publish,
});

export default admin

