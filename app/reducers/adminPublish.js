const initialState={
    id:'',
    title:'',
    content:'',
    description:'',
};
export const actionTypes = {
    UPDATING_TITLE:"UPDATING_TITLE",
    UPDATING_DESCRIPTION:"UPDATING_DESCRIPTION",
    UPDATING_CONTENT:"UPDATING_CONTENT",
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
        default:
            return state;
    }
}