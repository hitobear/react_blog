import React, {Component, PropTypes} from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import './index.less'
import { routes } from '../../constants/routes'
import { menu } from '../../utils'
import Menus from './menus'
import {Layout} from 'antd'
import Publish from '../publish/publish'
import Manage from '../manage/Manage'
const { Content, Footer } = Layout
export default class Admin extends Component {

    render(){
        const { match } = this.props;
        return (<div className='admin_layout'>
            <aside className='admin_sider'><Menus menu={menu} location={this.props.history.location}></Menus></aside>
            <div className='content_container'>
                <div className='content_header'></div>
                <div className='content_main'>
                    <Route key='manage' path={`${match.path}/manage`} component={Manage}/>
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