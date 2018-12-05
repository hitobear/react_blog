import React, {Component} from 'react'
import MenuItem from './MenuItem'

import classNames from 'classnames';
import './index.less'
export default class Menu extends Component {
    static defaultProps= {
        prefixCls: 'lt-menu',
        className: '',
      };
      constructor(props){
        super(props);
        this.state = {
            current:'all'
        }
    }

    static Item =MenuItem;
    handleClick = (key) => {
        let toPath = key;
        this.setState({
            current: key,
        });
        this.props.history.push(toPath);
    };


    render(){
        const {prefixCls,className}=this.props;
        const classes=classNames(prefixCls,className)
        return  <ul className={classes}>
                    <MenuItem to="my" onClick={this.handleClick} selected={'my'===this.state.current}>My Blog</MenuItem>
                    <MenuItem to="all" onClick={this.handleClick} selected={'all'===this.state.current}>Global Blog</MenuItem>
                </ul>
    }
    componentDidMount() {
        let tabname=this.props.history.location.pathname.replace('\/','');
        if(!!tabname)
        this.setState({
            current:tabname
        })
    }
}