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
const { Content, Footer } = Layout
export default class Admin extends Component {

    render(){
        return (<div className='admin_layout'>
            <aside className='admin_sider'><Menus menu={menu}></Menus></aside>
            <div className='content_container'>
                <div className='content_header'></div>
                <div className='content_main'>
                    {routes.map(({ path, key, component}) => (
                        <Route key={key}
                            exact
                            path={path}
                            component={component}
                        />
                        ))
                    }
                </div>
                <div className='content_footer'>
                    Copyright © litong 2018
                </div>
            </div>
        </div>)
    }
}