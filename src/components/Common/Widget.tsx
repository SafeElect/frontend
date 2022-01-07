import React from 'react';

const Widget = props => {
    const {
        light,
        dark,
        detail,
        container,
        className,
        children,
        ...others
    } = props;

    let classWillImplemented = className ? className + ' widget' : 'widget';
    classWillImplemented += light ? ' widget-light' : '';
    classWillImplemented += dark ? ' widget-dark' : '';
    classWillImplemented += detail ? ' widget-detail' : '';
    classWillImplemented += container ? ' widget-container' : ' ';


    return (
        <div className={classWillImplemented} {...others}>
            {children}
        </div>
    
    )
}

export default Widget
