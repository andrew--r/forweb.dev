import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import glob from 'glob';
import mkdirp from 'mkdirp';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { sourcePath, compiledSourcePath, buildPath } from '../build.config';
import { execTerminalCommand } from './utils';

export function buildMarkup() {
  console.log('Building markup...');

  execTerminalCommand(`rm -rf ${compiledSourcePath}`);
  execTerminalCommand(
    `$(npm bin)/babel ${sourcePath} --out-dir ${compiledSourcePath}`,
  );

  const pagesPath = `${compiledSourcePath}/pages`;
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
    const builtPagePath = path.resolve(buildPath, `.${page.pathname}`);

    mkdirp.sync(builtPagePath);
    fs.writeFileSync(path.resolve(builtPagePath, `./index.html`), pageMarkup);
  });

  console.log('Done.\n');
}
