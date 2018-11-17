import React, {Component} from 'react'
import {Button} from 'antd'
export default class ManageHeader extends Component {

    render(){
        return (<div className='manage-header' style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type='default'>保存草稿</Button>
            <Button type='primary'>发布文章</Button>
        </div>)
    }
}