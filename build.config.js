const path = require('path');

module.exports = {
  paths: {
    source: path.resolve(__dirname, './source'),
    build: path.resolve(__dirname, './build'),
  },
  localAssetsDirName: '_assets',
};
