import {combineReducers} from 'redux'



export function reducer(state={},action) {
    return{
        ...state
    }
}

const user = combineReducers({
    adminGlobalState:reducer,
});

export default user

