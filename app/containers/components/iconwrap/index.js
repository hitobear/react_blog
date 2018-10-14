import React, {Component} from 'react'
import {Icon} from 'components'

const iconStyle={
    marginRight:'8px'
}
export default class IconWrap extends Component {
    
    render(){
        const {type,children,...rest}=this.props;
        return <span><Icon type={type} style={{marginRight:'8px'}} {...rest}></Icon>{children}</span>
    }

}