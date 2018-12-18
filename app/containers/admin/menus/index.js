import React from 'react'
import {Menu,Icon,Layout} from 'antd';
import { Link } from 'react-router-dom'
import './index.less'
import pathToRegexp from 'path-to-regexp'

const Menus = ({ handleClickNavMenu, navOpenKeys, changeOpenKeys,location, menu }) => {

  // 寻找选中路由
  let defaultSelectedKeys
  for (let item of menu) {
    if (item.router && pathToRegexp(item.router).exec(location.pathname)) {
        defaultSelectedKeys = item.router
      break
    }
  }

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1))
    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys)
  }
    const renderMenuItem =
        ({ router, name, icon, link, ...props }) =>
            <Menu.Item
                key={router}
                className='sidermenu_item'              
                {...props}
               
            >
                <Link to={router}>
                    {icon && <Icon type={icon} />}
                    <span className="nav_text">{name}</span>
                </Link>
            </Menu.Item>
    const getMenus = (menu)=>{
        return  menu.map(item =>{
           return renderMenuItem(item)
        })
    }

    return (
        <Menu theme="dark" className='sidermenu' defaultSelectedKeys={defaultSelectedKeys}>{menu&&getMenus(menu)}</Menu>
    )

}

export default Menus