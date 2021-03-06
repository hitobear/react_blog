import React, {Component} from 'react'
import { Select } from 'antd';
const Option = Select.Option;


export default class ManageTag extends Component {

    render(){
        const tagList = this.props.tagList;
        return  (<Select
        mode="tags"
        showSearch={true}
        placeholder="请输入标签"
        style={{width: '100%'}}
        onChange={this.props.handleTagChange}
        value={this.props.tag}
    >
        {tagList.map(tag => <Option key={tag.id} value={tag.name}>{tag.name}</Option>)}
    </Select>)
    }
    render2(){
        return (<div>abc</div>)
    }
}