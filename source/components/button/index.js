import React from 'react';
import cn from 'classnames';

export function Button(props) {
  const { className, children, ...restProps } = props;

  return (
    <button {...restProps} className={cn('button', className)}>
      {children}
    </button>
  );
}
