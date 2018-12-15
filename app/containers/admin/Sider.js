import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import Menus from './menus'

const Sider = ({location, changeTheme, navOpenKeys, changeOpenKeys, menu }) => {
  const menusProps = {
    menu,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <div>
      <Menus {...menusProps} />
    </div>
  )
}


export default Sider