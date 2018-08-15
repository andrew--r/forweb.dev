import { execTerminalCommand } from './utils';
import { sourcePath, buildPath } from '../build.config';

export function buildAssets() {
  console.log('Building assets...');
  execTerminalCommand(`cp -R ${sourcePath}/assets ${buildPath}/assets`);
  console.log('Done.');
}
