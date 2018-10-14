import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'components'
import IconWrap from '../../../components/iconwrap'
export const ArticleItem = (props)=>(
    
    <div to='/detail/456' className='list_item list_item_extra_wrap post_item link'>
        <div className='item_main'>
                    <p className='item_content'  onClick={()=>props.history.push(`/detail/123}`)}>
                        <h4 className='article_title'>{props.data.title}</h4>
                        <p className='article_description'>{props.data.summary}</p>
                     </p>
                     <ul className='desc_info'>
                            <li className='desc_item'>
                                <Icon type="eye" className='inline-left-8 inline-right-4'/>
                                {props.data.viewCount}
                                <Icon type="message" className='inline-left-8 inline-right-4'/>
                                {props.data.commentCount}
                            </li>
                            <li  className='desc_item'>
                                <IconWrap type='tag'>abc</IconWrap>                                
                            </li>
                     </ul>
        </div>
        <div className='item_extra'>
            2018-08-19
        </div>
    
    </div>
    
)