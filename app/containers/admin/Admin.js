import React, {Component, PropTypes} from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import './index.less'
import { routes } from '../../constants/routes'
import menu from '../../utils/menu'
import Menus from './menus'
import {Layout} from 'antd'
import Publish from '../publish/publish'
import Manage from '../manage/Manage'
import Tag from '../tag'
import config from '../../../config/config'
import Sider from './sider'
const {prefix} = config

const { Content, Footer } = Layout
export default class Admin extends Component {
    state={
        navOpenKeys: JSON.parse(localStorage.getItem(`${prefix}navOpenKeys`)) || [],
    }

    changeOpenKeys=(openKeys)=> {
        this.setState({navOpenKeys:openKeys})
    }
    
    render(){
        const siderProps={
            menu,
            location:this.props.history.location,
            navOpenKeys:this.state.navOpenKeys,
            changeOpenKeys:this.changeOpenKeys,
        }
        const { match } = this.props;
        return (<div className='admin_layout'>
            <Sider {...siderProps}></Sider>
            <div className='content_container'>
                <div className='content_header'></div>
                <div className='content_main'>
                    <Route key='manage' path={`${match.path}/manage`} component={Manage}/>
                    <Route key='tag' path={`${match.path}/tag`} component={Tag}/>
                    <Route key='publish' path={`${match.path}/publish`} component={Publish}/>
                    <Route key='edit/:id' path={`${match.path}/edit/:id`} component={Publish}/>
                </div>
                <div className='content_footer'>
                    Copyright © litong 2018
                </div>
            </div>
        </div>)
    }
}