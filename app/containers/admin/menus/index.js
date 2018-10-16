import React from 'react'
import {Menu,Icon,Layout} from 'antd';
import { Link } from 'react-router-dom'
import './index.less'
const Menus = ({ handleClickNavMenu, navOpenKeys, changeOpenKeys, menu }) => {

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
            console.log('rendeitem')
            console.log(item)
           return renderMenuItem(item)
        })
    }

    return (
        <Menu theme="dark" className='sidermenu' defaultSelectedKeys={[menu[0].router]}>{menu&&getMenus(menu)}</Menu>
    )

}

export default Menus