import React, {Component, PropTypes} from 'react'
import style from './index.less'
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
        return (<div className={style.main}>
            <section className={style.user_info}>
                <img src={avatar} className={style.avatar}></img>
                <h3 className={style.title}>{title}</h3>
                <p className={style.desc}>
                    <Link to='/' className={style.userlink}>{author}</Link>
                    {time}
                </p>
            </section>
            <section className={style.articleContent}>
                <p>{articleContent}</p>
            </section>
        </div>)
    }
}