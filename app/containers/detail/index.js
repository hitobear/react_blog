import React, {Component, PropTypes} from 'react'
import './index.less'
import {Link} from 'react-router-dom'
import {Icon} from 'components'
export class Detail extends Component {
    render(){
        const {articleContent,title,author,viewCount,commentCount,time,avatar} = {
            articleContent:'我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈我是内容哈哈哈',
            title:'测试文章',
            author:'litong',
            viewCount:100,
            commentCount:20,
            time:'2017-8-12',
            avatar:'http://blog-server.hunger-valley.com/avatar/48.jpg',
        };
        return (<div className='main'>
            <section className='user_info'>
                <h3 className='title'>{title}</h3>
                <img src={avatar} className='avatar'></img>
                <p className='desc'>
                    <Link to='/' className='userlink'>{author}</Link>
                    <div className='restdesc'>
                        <Icon type="calender" className='inline-right-4'/>
                        {time}
                        <Icon type="eye" className='inline-left-8 inline-right-4'/>
                        {viewCount}
                        <Icon type="message" className='inline-left-8 inline-right-4'/>
                        {commentCount}
                    </div>
                </p>
            </section>
            <section className='articleContent'>
                <p>{articleContent}</p>
            </section>
        </div>)
    }
}