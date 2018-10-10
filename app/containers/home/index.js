import React, {Component, PropTypes} from 'react'
import {Avatar,Icon} from 'components'
import {Link} from 'react-router-dom'
import './index.less'
export class Home extends Component {
    
    render(){
        const {avatar,author,title,viewCount,commentCount,time} ={
            avatar:'http://blog-server.hunger-valley.com/avatar/48.jpg',
            title:'测试文章',
            author:'litong',
            viewCount:100,
            commentCount:20,
            time:'1天前',
        }

        return <div>
            <Link to='/detail/456' className='post_item link'>
                 <p  className='avatar'><Avatar shape="circle" src={avatar} caption={author}></Avatar>
                 </p>
                 <p className='desc_title'>
                    <span className='article_title'>{title}</span>
                    <span className='article_time'>{time}</span>
                 </p>
                 <p className='desc_info'>
                        <Icon type="eye" className='inline-left-8 inline-right-4'/>
                        {viewCount}
                        <Icon type="message" className='inline-left-8 inline-right-4'/>
                        {commentCount}
                 </p>
            </Link>
            <Link to='/detail/456' className='post_item link'>
                 <p  className='avatar'><Avatar shape="circle" src={avatar} caption={author}></Avatar>
                 </p>
                 <p className='desc_title'>
                    <span className='article_title'>{title}</span>
                    <span className='article_time'>{time}</span>
                 </p>
                 <p className='desc_info'>
                        <Icon type="eye" className='inline-left-8 inline-right-4'/>
                        {viewCount}
                        <Icon type="message" className='inline-left-8 inline-right-4'/>
                        {commentCount}
                 </p>

            </Link>
        </div>
    }
}