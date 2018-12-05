const initialState = {
    list:[],
    modalVisible:false,
    currentItem:{},
    modalType:'create',
};

export const actionTypes = {
    SAVE_TAG:"SAVE_TAG",
    DELETE_TAG:"DELETE_TAG",
    GET_TAG_LIST: 'GET_TAG_LIST',
    RESPONSE_GET_TAG_LIST: "RESPONSE_GET_TAG_LIST",
    HIDE_MODAL:"HIDE_MODAL",
    SHOW_MODAL:"SHOW_MODAL",
};

export const actions = {
    save_tag:function (data) {
        return{
            type:actionTypes.SAVE_TAG,
            data
        }
    },
    delete_tag:function (data) {
        return{
            type:actionTypes.DELETE_TAG,
            data:data||{},
        }
    },
    get_tag_list: function () {
        return {
            type: actionTypes.GET_TAG_LIST
        }
    },
    hide_modal:function(){
        return {
            type: actionTypes.HIDE_MODAL
        }
    },
    show_modal:function(data){
        return {
            data:data||{},
            type: actionTypes.SHOW_MODAL,
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.HIDE_MODAL:
            return {
                ...state,modalVisible:false,
            }
        case actionTypes.SHOW_MODAL: 
            return {
                ...state,modalVisible:true,modalType:action.data.modalType,currentItem:action.data.item
            }
        case actionTypes.RESPONSE_GET_TAG_LIST:
            return {
                ...state, list: [...action.data.list]
            };
        default:
            return state;
    }
}