import React, {Component, PropTypes} from 'react'
import {Avatar} from 'components'
export class Home extends Component {
    
    render(){
        const {avatar} ={
            avatar:'http://blog-server.hunger-valley.com/avatar/48.jpg',
        }

        return <div>welcomehome <Avatar shape="circle" src={avatar}></Avatar></div>
    }
}