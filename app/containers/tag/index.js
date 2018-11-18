import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from 'antd'
import List from './list'
import './index.less'
import Modal from './modal'
import {actions} from "../../reducers/tag";
const {save_tag,get_tag_list,hide_modal,show_modal} = actions;
class Tag extends Component {
    
    componentDidMount(){
        console.log('compodidmount...')
        this.props.get_tag_list();
    }
    render(){
        console.log('render.....')
        const {save_tag,modalVisible,hide_modal,show_modal} = this.props;
        const modalProps={
            visible:modalVisible,
            mask:true,
            maskClosable:false,
            onOk(data){
                console.log('onok.....')
                save_tag(data)
            },
            onCancel:hide_modal,
        }
        const listProps={
            dataSource:(this.props.list||[]).map((data)=>{return {...data,key:data._id}})
        }
        return (<div>
            <div className='table_operator'>
            <Button icon="plus" type="primary" onClick={() => show_modal()}>
                新建
             </Button>
             </div>
            <List {...listProps}/>
            <Modal {...modalProps}/>    
        </div>)
    }
}

function mapStateToProps(state) {
    console.log('sssss====state')
    console.log(state)
    const {list,modalVisible} = state.tag;
    return {
        list,
        modalVisible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        save_tag: bindActionCreators(save_tag, dispatch),
        get_tag_list: bindActionCreators(get_tag_list, dispatch),
        show_modal: bindActionCreators(show_modal, dispatch),
        hide_modal: bindActionCreators(hide_modal, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tag)