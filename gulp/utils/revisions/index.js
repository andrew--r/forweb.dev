const path = require('path');
const config = require('../../../build.config');

module.exports = {
  getRevManifest: () => require(`${config.paths.build}/rev-manifest.json`),
  getAssetUrl: (revManifest) => (assetPath) =>
    `/${revManifest[path.join('assets', assetPath)]}`,
  getPageAssetUrl: (revManifest) => (pagePath) => (assetPath) =>
    `/${
      revManifest[path.join(pagePath, config.localAssetsDirName, assetPath)]
    }`,
};
