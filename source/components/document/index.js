import React from 'react';

export function Document(props) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{props.title || 'For Web'}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans"
        />
        <link rel="stylesheet" href={`/assets/index.css?v=${Date.now()}`} />
      </head>

      <body className="page">{props.children}</body>
    </html>
  );
}
