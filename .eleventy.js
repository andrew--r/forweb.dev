const markdownIt = require('markdown-it');
const hljs = require('highlight.js');
const rss = require('@11ty/eleventy-plugin-rss');
const htmlMinifier = require('html-minifier');
const fs = require('fs');
const { groupByYear } = require('./src/nunjucks/filters/groupByYear');
const { jsSlice } = require('./src/nunjucks/filters/jsSlice');
const { filterPeople } = require('./src/nunjucks/filters/filterPeople');
const localeRedirect = require('./api/localeRedirect');

const OUTPUT_FOLDER_NAME = 'build';
const LAYOUTS = ['main', 'article'];

module.exports = (config) => {
  LAYOUTS.forEach((layout) => {
    config.addLayoutAlias(layout, `layouts/${layout}.njk`);
  });

  /**
   * Markdown
   */
  config.setLibrary(
    'md',
    markdownIt({
      html: true,
      highlight: (source, language) =>
        language ? hljs.highlight(language, source).value : '',
    }),
  );

  /**
   * Passthrough copy
   */
  config.addPassthroughCopy('src/site/assets/fonts');
  config.addPassthroughCopy('src/site/assets/images');

  /**
   * Transforms
   */
  config.addTransform('minifyMarkup', (content, outputPath) => {
    if (
      outputPath &&
      ['html', 'xml'].some((extension) => outputPath.endsWith(`.${extension}`))
    ) {
      return htmlMinifier.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: outputPath.endsWith('.xml'),
      });
    }

    return content;
  });

  /**
   * Filters
   */
  config.addNunjucksFilter('groupByYear', groupByYear);
  config.addNunjucksFilter('jsSlice', jsSlice);
  config.addNunjucksFilter('filterPeople', filterPeople);

  config.addShortcode('dateToIsoString', (date) => date.toISOString());

  config.addShortcode('formatDate', (date, locale) => {
    const formatter = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formatter.format(date).replace(/\sг.$/, ''); // remove trailing " г." in Russian
  });

  /**
   * Plugins
   */
  config.addPlugin(rss);

  config.setBrowserSyncConfig({
    callbacks: {
      ready: (_, browserSync) => {
        browserSync.addMiddleware('/', localeRedirect);

        browserSync.addMiddleware('*', (_, response) => {
          const notFoundPageContent = fs.readFileSync(
            `${OUTPUT_FOLDER_NAME}/404.html`,
          );

          response.write(notFoundPageContent);
          response.writeHead(404);
          response.end();
        });
      },
    },
  });

  /**
   * Collections
   */
  function addLocalizedCollection({ name, tag, locale }) {
    config.addCollection(name, (collectionApi) => {
      return collectionApi.getFilteredByTags(tag, locale);
    });
  }

  addLocalizedCollection({ name: 'articlesEn', tag: 'articles', locale: 'en' });
  addLocalizedCollection({ name: 'articlesRu', tag: 'articles', locale: 'ru' });

  return {
    dir: {
      input: 'src/site',
      output: OUTPUT_FOLDER_NAME,
    },
    templateFormats: ['njk', 'md', 'png', 'jpg', 'jpeg', 'svg', '11ty.js'],
    passthroughFileCopy: true,
  };
};
