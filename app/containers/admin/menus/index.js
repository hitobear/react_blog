import React,{Fragment} from 'react'
import {Menu,Icon,Layout} from 'antd';
import { Link } from 'react-router-dom'
import './index.less'
import {
    arrayToTree
  } from '../../../utils'
import pathToRegexp from 'path-to-regexp'

const { SubMenu } = Menu

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
    const generateMenus = data => {
        return data.map(item => {
          if (item.children) {
            return (
              <SubMenu
                key={item.id}
                title={
                  <Fragment>
                    {item.icon && <Icon type={item.icon} />}
                    <span>{item.name}</span>
                  </Fragment>
                }
              >
                {generateMenus(item.children)}
              </SubMenu>
            )
          }
          return (
            <Menu.Item key={item.id}>
              <Link to={item.router}>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        })
    }
    const menuTree = arrayToTree(menu, 'id', 'menuParentId')

    return (
        <Menu
        mode="inline" 
        className='sidermenu' defaultSelectedKeys={defaultSelectedKeys}>{menu&&generateMenus(menuTree)}</Menu>
    )

}

export default Menus