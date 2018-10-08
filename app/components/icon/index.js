import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less'
const Icon=(props)=>{
    const { type, className = '', spaceright,spaceleft,spin,...restProps } = props;
    const classString = classNames('iconfont',{
      lticon: true,
      'lticon-spin': !!spin || type === 'loading',
      [`icon-${type}`]: true,
      'space-right':spaceright?true:false,
      'space-left':spaceleft?true:false,
    }, className);
    return <span className={classString} {...restProps}/>;
};

export default Icon;