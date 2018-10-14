import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less'
export default class Card  extends Component{
    static defaultProps = {
        prefixCls: 'lt-card',
    };

    render(){
        const {prefixCls,title,headStyle,bodyStyle,className,children,...rest}=this.props;
        const classes=classNames(prefixCls,className)
        let head;
        if(title){
            head=(<div className={`${prefixCls}-head`} style={headStyle}>
            <div className={`${prefixCls}-head-wrapper`}>
              {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
            </div>
          </div>)
        }
        const body = (
            <div className={`${prefixCls}-body`} style={bodyStyle}>
              {children}
            </div>
          );
        return (<div className={classes} {...rest}>{head}{body}</div>)
    }
}