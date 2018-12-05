import React, {Component, PropTypes} from 'react'
import {Avatar,Icon} from 'components'
import {Menu} from '../components'
import {Link} from 'react-router-dom'
import {Row,Col} from 'antd'
import ArticleList from './components/articleList'
import Sider from './components/sider'
import {connect} from 'react-redux'
import {actions as frontActions} from '../../reducers/front'
import {bindActionCreators} from 'redux'
const {get_front_blog_list} = frontActions;
import './index.less'
class Home extends Component {
    render(){
        const {avatar,author,title,viewCount,commentCount,time} ={
            avatar:'http://blog-server.hunger-valley.com/avatar/48.jpg',
            title:'测试文章',
            description:'这是总结内容哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            author:'litong',
            viewCount:100,
            commentCount:20,
            time:'1天前',
        }
        const data=[{
            avatar:'http://blog-server.hunger-valley.com/avatar/48.jpg',
            title:'测试文章',
            description:'这是总结内容哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            author:'litong',
            viewCount:100,
            commentCount:20,
            time:'1天前',
            tags:'javascript,css'
        },{
            avatar:'http://blog-server.hunger-valley.com/avatar/48.jpg',
            title:'测试文章',
            description:'这是总结内容哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            author:'litong',
            viewCount:100,
            commentCount:20,
            time:'1天前',
            tags:'javascript,css,react'
        }]

        return <div>
           <Row>
                <Col
                    lg={{ span: 15, offset: 1 }}
                    md={{ span: 15, offset: 1 }}
                    xs={{ span: 24 }}
                    className="list-wrapper"
                >
                    <ArticleList data={this.props.blogList} history={this.props.history}/>
                    </Col>
                    <Col 
                        lg={{ span: 6, offset: 1 }}
                        md={{ span: 6, offset: 1 }}
                        xs={{ span: 24 }}>
                        <Sider />
                    </Col>
            </Row>
        </div>
    }

    componentDidMount() {
        this.props.get_front_blog_list()
    }
}

function mapStateToProps(state) {
    return {
        blogList: state.front.blogList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_front_blog_list: bindActionCreators(get_front_blog_list, dispatch),
    }
}

 export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);