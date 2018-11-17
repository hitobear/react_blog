const initialState={
    id:'',
    title:'',
    content:'',
    description:'',
    tags:[{id:1,name:'abc'},{id:2,name:'Javascript'},{id:3,name:'CSS'}],
};
export const actionTypes = {
    UPDATING_TITLE:"UPDATING_TITLE",
    UPDATING_DESCRIPTION:"UPDATING_DESCRIPTION",
    UPDATING_CONTENT:"UPDATING_CONTENT",
    UPDATING_ID:"UPDATING_ID",
    UPDATING_DATA:"UPDATING_DATA",
    SAVE_BLOG:"SAVE_BLOG",
    
};
export const actions = {
    update_title:function (title) {
        return{
            type:actionTypes.UPDATING_TITLE,
            title
        }
    },
    update_description:function (description) {
        return{
            type:actionTypes.UPDATING_DESCRIPTION,
            description
        }
    },
    update_content:function (content) {
        return{
            type:actionTypes.UPDATING_CONTENT,
            content
        }
    },
    update_data:function (data) {
        return{
            type:actionTypes.UPDATING_DATA,
            data
        }
    },
    save_blog:function (data) {
        return{
            type:actionTypes.SAVE_BLOG,
            data
        }
    }
};


export function reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.UPDATING_TITLE:
            return{
                ...state,title:action.title
            };
        case actionTypes.UPDATING_DESCRIPTION:
            return{
                ...state,description:action.description
            };
        case actionTypes.UPDATING_CONTENT:
            return{
                ...state,content:action.content
            };
        case actionTypes.UPDATING_ID:
            return{
                ...state,id:action.id
            };
        case actionTypes.UPDATEING_DATA:
            return {
                ...state,...action.data
            }
        default:
            return state;
    }
}