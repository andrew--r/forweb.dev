const markdownIt = require('markdown-it');
const hljs = require('highlight.js');
const rss = require('@11ty/eleventy-plugin-rss');
const htmlMinifier = require('html-minifier');
const { groupByYear } = require('./src/nunjucks/filters/groupByYear');

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

  return {
    dir: {
      input: 'src/site',
      output: 'build',
    },
    templateFormats: ['njk', 'md', 'png', 'jpg', 'svg', '11ty.js'],
    passthroughFileCopy: true,
  };
};
