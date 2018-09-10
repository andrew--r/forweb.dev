import React from 'react';
import cn from 'classnames';

export function Link(props) {
  const { className, children, ...restProps } = props;

  return (
    <a {...restProps} className={cn('link', className)}>
      {children}
    </a>
  );
}
