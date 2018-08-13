import React from 'react';

export function Logo() {
  return (
    <h1 className="logo">
      <a href="/">
        <img
          className="logo__image"
          src="/assets/logo.svg"
          alt="For Web logo"
        />
      </a>{' '}
      For Web
    </h1>
  );
}
