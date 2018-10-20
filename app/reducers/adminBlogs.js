const initialState = {
    list:[],
    pageNum: 1,
    total: 0
};
export const actionTypes = {
    GET_Blog_LIST: 'GET_Blog_LIST',
    RESPONSE_GET_Blog_LIST: "RESPONSE_GET_Blog_LIST",
    EDIT_Blog: "EDIT_Blog",
    DELETE_Blog: "DELETE_Blog",
};

export const actions = {
    get_blog_list: function (pageNum = 1) {
        return {
            type: actionTypes.GET_Blog_LIST,
            pageNum
        }
    },
    delete_blog: function (id) {
        return {
            type: actionTypes.DELETE_BLOG,
            id
        }
    },
    edit_blog: function (id) {
        return {
            type: actionTypes.EDIT_BLOG,
            id
        }
    }
};
export function blogs(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESPONSE_GET_Blog_LIST:
            return {
                ...state, list: [...action.data.list], total: action.data.total,pageNum:action.data.pageNum
            };
        default:
            return state;
    }
}