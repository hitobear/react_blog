import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon,Tag} from 'components'
import IconWrap from '../../../components/iconwrap'
import {color} from '../../../utils/utils'
export  class ArticleItem extends Component{
    
    
    render(){
        const{tags,id}=this.props.data
        console.log('tags')
        console.log(tags)
        return (<div to='/detail/456' className='list_item list_item_extra_wrap post_item link'>
        <div className='item_main'>
                    <p className='item_content'  onClick={()=>this.props.history.push(`/detail/123}`)}>
                        <h4 className='article_title'>{this.props.data.title}</h4>
                        <p className='article_description'>{this.props.data.summary}</p>
                     </p>
                     <ul className='desc_info'>
                            <li className='desc_item'>
                                <Icon type="eye" className='inline-left-8 inline-right-4'/>
                                {this.props.data.viewCount}
                                <Icon type="message" className='inline-left-8 inline-right-4'/>
                                {this.props.data.commentCount}
                            </li>
                            {tags?<li  className='desc_item'>
                               <IconWrap type="tag">
                                    {tags.split(',').map(v => (
                                        <Tag
                                        key={id + Math.random()}
                                        color={color[Math.floor(Math.random()*color.length)]}
                                        onClick={()=>this.props.history.push(`/tags/${v}`)}
                                        >
                                        {v}
                                        </Tag>
                                    ))}
                                </IconWrap></li>:null }                           
                           
                     </ul>
        </div>
        <div className='item_extra'>
            2018-08-19
        </div>
    
    </div>)
    }
    
}