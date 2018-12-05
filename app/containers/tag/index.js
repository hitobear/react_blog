import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from 'antd'
import List from './list'
import './index.less'
import Modal from './modal'
import {actions} from "../../reducers/tag";
const {save_tag,delete_tag,get_tag_list,hide_modal,show_modal} = actions;
class Tag extends Component {

    componentDidMount(){
        this.props.get_tag_list();
    }
    
    render(){
        const {save_tag,delete_tag,modalVisible,hide_modal,show_modal,modalType,currentItem} = this.props;
        const modalProps={
            visible:modalVisible,
            mask:true,
            maskClosable:false,
            title:`${modalType==='create'?'新建标签':'更新标签'}`,
            onOk(data){
                save_tag(data)
            },
            onCancel:hide_modal,
            item:modalType === 'create' ? {} : currentItem,
            
        }
        const listProps={
            dataSource:(this.props.list||[]).map((data)=>{return {...data,key:data._id}}),
            onEditItem (item) {
                show_modal({modalType:'update',item,})
            },
            onDeleteItem (id) {
                delete_tag({id:id})
            }
        }
        const onAdd=()=>{
            show_modal({modalType:'create'})
        }
        return (<div>
            <div className='table_operator'>
            <Button icon="plus" type="primary" onClick={onAdd}>
                新建
             </Button>
             </div>
            <List {...listProps}/>
            <Modal {...modalProps}/>    
        </div>)
    }
}

function mapStateToProps(state) {
    const {list,modalVisible,modalType,currentItem} = state.tag;
    return {
        list,
        modalVisible,
        modalType,
        currentItem,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        save_tag: bindActionCreators(save_tag, dispatch),
        delete_tag: bindActionCreators(delete_tag, dispatch),
        get_tag_list: bindActionCreators(get_tag_list, dispatch),
        show_modal: bindActionCreators(show_modal, dispatch),
        hide_modal: bindActionCreators(hide_modal, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tag)