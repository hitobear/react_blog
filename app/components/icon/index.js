import React, { Component } from 'react';
import classNames from 'classnames';

const Icon=(props)=>{
    const { type, className = '', spin,...restProps } = props;
    const classString = classNames('iconfont',{
      lticon: true,
      'lticon-spin': !!spin || type === 'loading',
      [`icon-${type}`]: true,
    }, className);
    return <span className={classString} {...restProps}/>;
};

export default Icon;