import React,{Fragment,Component} from 'react'
import {Menu,Icon,Layout} from 'antd';
import { Link } from 'react-router-dom'
import './index.less'
import {
    arrayToTree
  } from '../../../utils'
import pathToRegexp from 'path-to-regexp'

const { SubMenu } = Menu


class Menus extends Component{
  state = {
    openKeys: store.get('openKeys') || [],
  }

   onOpenChange = (openKeys) => {
    const { navOpenKeys,menu }=this.props
    console.log('change..')
    console.log(openKeys)

    const rootSubmenuKeys = menu.filter(_ => !_.menuParentId).map(_ => _.id)

    const latestOpenKey = openKeys.find(
      key => navOpenKeys.indexOf(key) === -1
    )

    let newOpenKeys = openKeys
    console.log('latst')
    console.log(latestOpenKey)
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      console.log('latest in,,')
      newOpenKeys = latestOpenKey ? [latestOpenKey] : []
    }
    console.log('new')
    console.log(newOpenKeys)

    changeOpenKeys(nextOpenKeys)
  }
   renderMenuItem =
        ({id, router, name, icon, link, ...props }) =>
            <Menu.Item
                key={id}
                className='sidermenu_item'              
                {...props}
               
            >
                <Link to={router}>
                    {icon && <Icon type={icon} />}
                    <span className="nav_text">{name}</span>
                </Link>
            </Menu.Item>
   getMenus = (menu)=>{
        return  menu.map(item =>{
           return this.renderMenuItem(item)
        })
    }
    generateMenus = data => {
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
                {this.generateMenus(item.children)}
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

  render(){
  const { handleClickNavMenu, navOpenKeys, changeOpenKeys,location, menu }=this.props
      // 寻找选中路由
  let defaultSelectedKeys
  for (let item of menu) {
    if (item.router && pathToRegexp(item.router).exec(location.pathname)) {
        defaultSelectedKeys = item.router
      break
    }
  }
    const menuTree = arrayToTree(menu, 'id', 'menuParentId')
    const menus=this.generateMenus(menuTree)
    console.log(menus)
    console.log('navopen')
    console.log(navOpenKeys)
    return (
        <Menu
        selectedKeys={['21']}
        openKeys={navOpenKeys}
        mode="inline" 
        onOpenChange={this.onOpenChange}
        className='sidermenu' >{menus}</Menu>
    )
    }
    

}

export default Menus