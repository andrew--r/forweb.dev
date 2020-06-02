const markdownIt = require('markdown-it');
const hljs = require('highlight.js');
const rss = require('@11ty/eleventy-plugin-rss');
const htmlMinifier = require('html-minifier');
const fs = require('fs');
const { groupByYear } = require('./src/nunjucks/filters/groupByYear');
const { sliceArray } = require('./src/nunjucks/filters/sliceArray');

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
  config.addNunjucksFilter('sliceArray', sliceArray);

  config.addShortcode('dateToIsoString', (date) => date.toISOString());

  config.addShortcode('formatDate', (date) => {
    const formatter = new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return formatter.format(date);
  });

  /**
   * Plugins
   */
  config.addPlugin(rss);

  config.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        browserSync.addMiddleware('*', (req, res) => {
          const notFoundPageContent = fs.readFileSync(`${OUTPUT_FOLDER_NAME}/404.html`);

          res.write(notFoundPageContent);
          res.writeHead(404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src/site',
      output: OUTPUT_FOLDER_NAME,
    },
    templateFormats: ['njk', 'md', 'png', 'jpg', 'svg', '11ty.js'],
    passthroughFileCopy: true,
  };
};
