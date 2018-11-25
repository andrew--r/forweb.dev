const fs = require('fs');
const path = require('path');
const config = require('../../../build.config');

const isDirectory = (source) => fs.lstatSync(source).isDirectory();

function getMetadata(pagePath) {
  const metadataPath = path.join(pagePath, 'metadata.js');

  if (fs.existsSync(metadataPath)) {
    return require(metadataPath);
  }

  return {};
}

function getChildrenSlugs(pagePath) {
  return fs
    .readdirSync(pagePath)
    .filter(
      (slug) =>
        slug !== config.localAssetsDirName &&
        isDirectory(path.join(pagePath, slug)),
    );
}

function getChildren(pagePath, url) {
  return new Map(
    getChildrenSlugs(pagePath).map((slug) => {
      const pageUrl = `${url === '/' ? '' : url}/${slug}`;

      return [slug, parsePagesTree(path.join(pagePath, slug), pageUrl)];
    }),
  );
}

function parsePagesTree(rootPath, url = '/') {
  const metadata = getMetadata(rootPath);
  const children = getChildren(rootPath, url);

  return {
    url,
    path: url.replace(/^\//, ''),
    metadata,
    children,
    get(relativeUrl) {
      if (['', '/'].includes(relativeUrl)) {
        return this;
      }

      return relativeUrl.split('/').reduce((result, pageSlug) => {
        return result.children.get(pageSlug);
      }, this);
    },
  };
}

module.exports = parsePagesTree;
