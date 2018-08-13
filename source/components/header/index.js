import React from 'react';
import cn from 'classnames';
import { Logo } from '../logo';

export function Header(props) {
  return (
    <header className={cn('header', props.className)}>
      <Logo />
    </header>
  );
}
