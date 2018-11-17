import React, {Component} from 'react'
import { Select } from 'antd';
const Option = Select.Option;


export default class ManageTag extends Component {

    render(){
        const tagList = this.props.tagList;
        console.log(`this.props.tags`)
        console.log(this.props.tags)
        return  (<Select
        mode="tags"
        showSearch={true}
        placeholder="请输入标签"
        style={{width: '100%'}}
        value='CSS'
    >
        {tagList.map(tag => <Option key={tag.id} value={tag.name}>{tag.name}</Option>)}
    </Select>)
    }
    render2(){
        return (<div>abc</div>)
    }
}