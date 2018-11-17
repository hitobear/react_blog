import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {actions} from "../../reducers/adminPublish";
import {actions as blogactions} from "../../reducers/adminBlogs";
import {connect} from 'react-redux'
import {Input,Button,Row,Col} from 'antd'
import ManageHeader from './manageheader'
import ManageTag from './managetag'
import './index.less'
const { TextArea } = Input

const {update_content, update_description, update_data,update_title,save_blog} = actions;
const {edit_blog} =blogactions
class Publish extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        console.log(this.props.match)
        console.log(`ida:${this.id}`)
    }
    componentDidMount(){
        this.props.edit_blog(this.id);
    }
     //标题输入框
    titleOnChange=(e)=> {
        this.props.update_title(e.target.value)
    };
    descOnChange=(e)=>{
        this.props.update_description(e.target.value)
    }
    contentOnChange=(e)=>{
        this.props.update_content(e.target.value)
    }
    getArticle=()=>{
        return (<div className='publish_container'>
        <h2 className='publish_description'>发布文章a</h2>
        <Input  className='publish_input'
                    placeholder={'请输入文章标题'}
                    onChange={this.titleOnChange}
                    value={this.props.title}
                    type='text'/>
        <TextArea 
            className='publish_input'
            rows={6} 
            autosize={{ minRows: 5}}
            placeholder="文章摘要" 
            onChange={this.descOnChange}
            value={this.props.description}
          />
         <TextArea 
            className='publish_input'
            rows={6} 
            autosize={{ minRows: 15}}
            placeholder="文章内容 markdown格式"
            onChange={this.contentOnChange}
            value={this.props.content}
          />
        <div className='controlbtns'>
            <Button type="primary" onClick={this.publishArticle}>发布</Button>
        </div>
        </div>)
    }
    //发表
    publishArticle=()=> {
        let data = {};
        data.title = this.props.title;
        data.description=this.props.description;
        data.content = this.props.content;
        this.props.save_blog(data);
    };

    render(){
        let tags=[{id:1,name:'abc'},{id:2,name:'Javascript'},{id:3,name:'CSS'}]
        return (<div className='publish_container_wrapper'>
            <Row>
                <Col span={18}>
                    {this.getArticle()}
                </Col>
                <Col span={6}>
                    <ManageHeader />
                    <ManageTag tag={this.props.tags} tagList={tags}/>
                </Col>
            </Row>
        </div>)
    }
}
function mapStateToProps(state) {
    const {title, description, content,tags} = state.admin.publish;
    return {
        title,
        description,
        content,
        tags
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update_title: bindActionCreators(update_title, dispatch),
        update_description: bindActionCreators(update_description, dispatch),
        update_content: bindActionCreators(update_content, dispatch),
        update_data: bindActionCreators(update_data, dispatch),
        save_blog: bindActionCreators(save_blog, dispatch),
        edit_blog: bindActionCreators(edit_blog, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Publish)