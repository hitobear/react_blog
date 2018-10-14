import React, {Component} from 'react'
import './index.less'
import config from '../../../config/config'
import {Link} from 'react-router-dom'
import {Icon} from 'components'
const apptitle=config.app.title
export default class Header extends Component {
    
    render(){
        const avatar="http://blog-server.hunger-valley.com/avatar/48.jpg"
        return <header className='header'>
            <div  className='container'>
            <p className='title'><Link to="/" className='link'>{apptitle}</Link></p>
            <div className='flex-area'>
                    <Link to="/" className='link nav-item'><Icon size="large" type="plus"/></Link>
                    <Link to="/" className='link nav-item'>关于我</Link>
                    <img src={avatar} className='avatar'></img>
            </div>
            </div>
        </header>
    }
}