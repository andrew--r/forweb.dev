import fs from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssCalc from 'postcss-calc';
import csso from 'csso';
import { sourcePath, buildPath } from '../build.config';

export function buildStyles() {
  console.log('Building styles...');
  const source = fs.readFileSync(`${sourcePath}/index.css`);
  const processResult = postcss()
    .use(postcssCalc())
    .use(autoprefixer())
    .process(source);

  processResult.warnings().forEach((warning) => {
    console.warn(warning.toString());
  });

  fs.writeFileSync(
    `${buildPath}/index.css`,
    csso.minify(processResult.css).css,
  );
  console.log('Done.\n');
}
