import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch, Layout } from 'antd'
import Menus from './menus'

const Sider = ({location, changeTheme, navOpenKeys, changeOpenKeys, menu }) => {
  const menusProps = {
    menu,
    location,
    navOpenKeys:['1','2'],
    changeOpenKeys,
  }
  return (
    <div>
      <Layout.Sider collapsible collapsed={false} theme='light' trigger={null}>
        <Menus {...menusProps} />
      </Layout.Sider>
    </div>
  )
}


export default Sider