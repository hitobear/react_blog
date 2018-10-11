import React,{Component} from 'react'
import style from './index.less'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom'
export default class MenuItem extends Component{
    static defaultProps= {
        prefixCls: 'lt-menu-item',
        className: '',
    };
    constructor(props){
        super(props);
        this.state = {
            current:'ab'
        }
    }
    handleClick=(e)=>{
        this.props.onClick(this.props.to);
    }
    render(){
        console.log(`selected:${this.props.selected}key:${this.props.to}`)
        const {prefixCls,className,children,selected,key}=this.props;
        const classes=classNames(prefixCls,className,
            {[`${prefixCls}-active`]:!!selected},
        )
        return <li className={classes} onClick={this.handleClick}>{children}</li>
    }
    componentDidMount() {
        this.setState({
            
        })
    }
}