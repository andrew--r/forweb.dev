import { execSync } from 'child_process';
import { buildMarkup } from './markup';
import { buildStyles } from './styles';
import { buildAssets } from './assets';
import { buildPath } from '../build.config';

function build() {
  console.log('Starting build...');

  const stdout = execSync(`rm -rf ${buildPath}`);

  console.log(stdout.toString());

  buildMarkup();
  buildStyles();
  buildAssets();

  console.log('Finished build.');
}

build();
