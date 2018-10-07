import React, {Component} from 'react'
import style from './index.less'
import config from '../../../config/config'
import {Link} from 'react-router-dom'
const apptitle=config.app.title
export default class Header extends Component {
    
    render(){
        const avatar="http://blog-server.hunger-valley.com/avatar/48.jpg"
        return <header className={style.header}>
            <p className={style.title}><Link to="/" className='link'>{apptitle}</Link></p>
            <div className={style.userset}>
                    <img src={avatar} className={style.avatar}></img>
            </div>
        </header>
    }
}