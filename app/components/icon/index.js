import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less'
const Icon=(props)=>{
  
    const { type, className = '', size,spaceright,spaceleft,spin,...restProps } = props;
    //size large,small
    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
      default:
        break;
    }
    
    const classString = classNames('iconfont',{
      [`lticon-${sizeCls}`]: sizeCls,
      lticon: true,
      'lticon-spin': !!spin || type === 'loading',
      [`icon-${type}`]: true,
      'space-right':spaceright?true:false,
      'space-left':spaceleft?true:false,
    }, className);
    return <span className={classString} {...restProps}/>;
};

export default Icon;