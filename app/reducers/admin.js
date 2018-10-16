import {reducer as blog} from "./adminPublish";
import {combineReducers} from 'redux'


const admin = combineReducers({
    blog,
});

export default admin

