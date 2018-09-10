import React from 'react';

export function Logo() {
  return (
    <h1 className="logo">
      <a className="logo__item" href="/">
        <img
          className="logo__image"
          src="/assets/logo.svg"
          alt="For Web logo"
        />
      </a>{' '}
      <a className="logo__item" href="/">
        For Web
      </a>
    </h1>
  );
}
