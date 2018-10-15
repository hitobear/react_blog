import React, {Component, PropTypes} from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import './index.less'
import { routes } from '../../constants/routes'
export default class Admin extends Component {

    render(){
        return (<div className='container'>
             {routes.map(({ path, key, component}) => (
                  <Route key={key}
                    exact
                    path={path}
                    component={component}
                  />
                ))
              }
        </div>)
    }
}