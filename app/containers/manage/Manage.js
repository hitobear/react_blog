import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {actions} from "../../reducers/adminBlogs";
import {connect} from 'react-redux'
import {List,Card,Icon,Button} from 'antd'
import {Tag} from 'components'
import {color} from '../utils/utils'
import './manage.less'
const {get_blog_list,edit_blog} =actions
class  Manage extends Component {
    componentDidMount() {
       
            this.props.get_blog_list()
    }
    render(){
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
        )
        let {list}=this.props;
       // const list=[{id:1,likeSize:5,messageSize:2,tags:'javascripts,css',title:'文章一',description:'描述一今天多多进步，好不好一二三四，明天继续上班，加油好吗'},
        //{id:2,likeSize:5,messageSize:2,tags:'javascripts,css',title:'文章二',description:'描述一今天多多进步，好不好一二三四，明天继续上班，加油好吗，最后一天'}]
        return (<Card
        style={{ marginTop: 24 }}
        bordered={false}
        bodyStyle={{ padding: '8px 32px 32px 32px' }}
      >
            <List className='blog_list'
            size="large"
            loading={list.length === 0 ? true : false}
            rowKey="id"
            itemLayout="vertical"
            dataSource={list}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText type="like-o" text={item.likeSize} />,
                  <IconText type="message" text={item.messageSize} />,
                  item.tags?<IconText type="tags-o" text={
                    item.tags.split(',').map(v => (
                      <Tag
                        key={item.id + Math.random()}
                        color={color[Math.floor(Math.random()*color.length)]}
                        onClick={()=>{}}
                      >
                        {v}
                      </Tag>
                  ))
                  } />:null,
                ]}
                extra={
                    [
                      <Button
                        key={item.id}
                        type="danger"
                        ghost
                      >
                        删除
                      </Button>,
                      <Button
                        key={item.created_at}
                        type="primary"
                        onClick={()=>{
                            this.props.history.push(`/admin/edit/${item._id}`)
                        }}
                        ghost
                      >
                        编辑
                      </Button>
                    ]
                  }
                
              >
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
      </Card>)
    }
}
function mapStateToProps(state) {
    const {list} = state.admin.blogs;
    return {
        list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        get_blog_list: bindActionCreators(get_blog_list, dispatch),
        edit_blog: bindActionCreators(edit_blog, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Manage)