const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const config = require('../../build.config');
const esTemplates = require('../plugins/es-templates');
const parsePagesTree = require('../utils/parse-pages-tree');
const {
  getRevManifest,
  getAssetUrl,
  getPageAssetUrl,
} = require('../utils/revisions');

gulp.task('markup', () => {
  const revManifest = getRevManifest();
  const pagesTree = parsePagesTree(`${config.paths.source}/pages`);
  const siteData = require(`${config.paths.source}/data`);

  return gulp
    .src(`${config.paths.source}/pages/**/template.js`)
    .pipe(
      esTemplates({
        getContext: (pagePath) => ({
          siteData,
          pagesTree,
          currentPage: pagesTree.get(pagePath),
          getAbsoluteUrl: (relativeUrl) => `${siteData.url}${relativeUrl}`,
          getPageAssetUrl: getPageAssetUrl(revManifest)(pagePath),
          getAssetUrl: getAssetUrl(revManifest),
        }),
      }),
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.paths.build));
});
