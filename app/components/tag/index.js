import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less'
export default class Tag  extends Component{
    static defaultProps = {
        prefixCls: 'lt-tag',
    };
    isPresetColor(color) {
        if (!color) { return false; }
        return (
          /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
          .test(color)
        );
    }
    render(){
        const {color,prefixCls,className,children,...rest}=this.props;
        const isPresetColor=this.isPresetColor(color);
        const classes=classNames(this.props.prefixCls,className,
        {[`${prefixCls}-${color}`]:isPresetColor})
        return (<div className={classes} {...rest}>{children}</div>)
    }
}