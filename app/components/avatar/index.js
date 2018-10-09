import React, {Component} from 'react'
import classNames from 'classnames';
import './index.less'
import {Icon} from 'components'
export default class Avatar extends Component {
    static defaultProps = {
        prefixCls: 'lt-avatar',
        shape: 'circle',
        size: 'default',
    };

    render(){
        const {
            prefixCls, shape, size, src, icon, className,caption, alt, ...others
          } = this.props;
        const sizeCls = classNames({
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small',
        });
        const classString = classNames(prefixCls, className, sizeCls, {
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-image`]: src,
            [`${prefixCls}-icon`]: icon,
        });
        const sizeStyle=(typeof size) === 'number' ? {
            width: size,
            height: size,
            lineHeight: `${size}px`,
            fontSize: icon ? size / 2 : 18,
        } : {};
        let children=this.props.children;
        let captionspan= {caption}?<span className='avacaption'>{caption}</span>:null;
        if (src) {
            children = (
              <img
                src={src}
                alt={alt}
              />
            );
        } else if (icon) {
            children = <Icon type={icon} />;
        } 

        return (
            <span
              {...others}
              style={{ ...sizeStyle, ...others.style }}
              className={classString}
            >
              {children}
              {captionspan}
            </span>
          );
    }
}