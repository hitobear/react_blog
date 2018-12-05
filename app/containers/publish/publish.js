import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {actions} from "../../reducers/adminPublish";
import {actions as blogactions} from "../../reducers/adminBlogs";
import {actions as tagActions} from "../../reducers/tag";
import {connect} from 'react-redux'
import {Input,Button,Row,Col} from 'antd'
import ManageHeader from './manageheader'
import ManageTag from './managetag'
import './index.less'
const { TextArea } = Input

const {update_content, update_description, update_data,update_title,save_blog} = actions;
const {get_tag_list} = tagActions;
const {edit_blog} =blogactions
class Publish extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }
    componentDidMount(){
        this.props.edit_blog(this.id);
        this.props.get_tag_list();
    }
     //标题输入框
    titleOnChange=(e)=> {
        this.props.update_title(e.target.value)
    };
    // Tag
    handleTagChange=(tags)=>{
        this.props.update_data({tags})
    }
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
        </div>)
    }
    //发表
    handlePublish=()=> {
        let data = {};
        data.title = this.props.title;
        data.description=this.props.description;
        data.content = this.props.content;
        data.tags=this.props.tags;
        this.props.save_blog(data);
    };

    render(){
      //  let tags=[{id:1,name:'abc'},{id:2,name:'Javascript'},{id:3,name:'CSS'}]
      let {taglist,tags} =this.props
        return (<div className='publish_article'>
            <Row>
                <Col span={18}>
                    {this.getArticle()}
                </Col>
                <Col span={6}>
                    <section className='infoitem'>
                        <ManageHeader publish={()=>{this.handlePublish()}}/>
                    </section>
                    <section className='infoitem'>
                        <h5>标签</h5>
                        <ManageTag tag={tags} tagList={taglist} handleTagChange={(values) => this.handleTagChange(values)}/>
                    </section>
                </Col>
            </Row>
        </div>)
    }
}
function mapStateToProps(state) {
    const {title, description, content,tags} = state.admin.publish;
    const {list} = state.tag;
    return {
        title,
        description,
        content,
        tags,
        taglist:list,
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
        get_tag_list: bindActionCreators(get_tag_list, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Publish)