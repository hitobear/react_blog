import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {actions} from "../../reducers/adminPublish";
import {actions as blogactions} from "../../reducers/adminBlogs";
import {actions as tagActions} from "../../reducers/tag";
import {connect} from 'react-redux'
import {Input,Button,Row,Col} from 'antd'
import BlogHeader from '../../components/blog/blog-header/blog-header'
import MarkDownEditor from '../../components/blog/editor'
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
    contentOnChange=(value)=>{
        this.props.update_content(value)
    }
    //发表
    publish=()=> {
        let data = {};
        data.title = this.props.title;
        data.description=this.props.description;
        data.content = this.props.content;
        data.tags=this.props.tags;
        this.props.save_blog(data);
    };
    

    render(){
      //  let tags=[{id:1,name:'abc'},{id:2,name:'Javascript'},{id:3,name:'CSS'}]
      let {taglist,tags,title,content} =this.props
      const handleTagChange=(values) => this.handleTagChange(values)
      const headerProps={title,taglist,tags,handleTagChange,publish:this.publish}
      const editorProps={content,onChange:this.contentOnChange}
        return (<div className='publish_article'>
            <Row>
                    <h3>发布文章</h3>
                    <BlogHeader {...headerProps}></BlogHeader>
                    <div className="article_editor">
                    <MarkDownEditor {...editorProps}/>
                    </div>
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