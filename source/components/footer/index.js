import React from 'react';
import cn from 'classnames';
import { Link } from '../link';

export function Footer(props) {
  return (
    <footer className={cn('footer', props.className)}>
      © 2014–... <Link href="http://andrew-r.ru">Андрей Романов</Link>
    </footer>
  );
}
