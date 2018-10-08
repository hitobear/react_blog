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
            <Icon type='calender' spaceright={true}/>abcd
            <section className='user_info'>
                <img src={avatar} className='avatar'></img>
                <h3 className='title'>{title}</h3>
                <p className='desc'>
                    <Link to='/' className='userlink'>{author}</Link>
                    {time}
                </p>
            </section>
            <section className='articleContent'>
                <p>{articleContent}</p>
            </section>
        </div>)
    }
}