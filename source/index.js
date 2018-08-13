import fs from 'fs';
import path from 'path';
import glob from 'glob';
import mkdirp from 'mkdirp';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { buildPath } from '../build.config';

const pagesPath = `${__dirname}/pages`;
const pages = glob.sync(`${pagesPath}/**/index.js`).map((pagePath) => {
  const parsedPagePath = path.parse(pagePath);

  return {
    pathname: `/${path.relative(pagesPath, parsedPagePath.dir)}`,
    component: require(pagePath).default,
  };
});

pages.forEach((page) => {
  const pageMarkup = `<!DOCTYPE html>${renderToStaticMarkup(
    <page.component />,
  )}`;
  const pagePath = path.resolve(buildPath, `.${page.pathname}`);

  mkdirp.sync(pagePath);
  fs.writeFileSync(path.resolve(pagePath, `./index.html`), pageMarkup);
});
