const fs = require('fs');
const path = require('path');
const sass = require('sass');
const postcss = require('postcss');

const fileName = 'styles.css';
const rawDir = path.resolve(__dirname, '../_includes/styles');
const rawFilepath = path.resolve(rawDir, 'index.scss');
const nodeModulesDir = path.resolve(__dirname, '../../../node_modules');

module.exports = class {
  async data() {
    return {
      permalink: `assets/${fileName}`,
      rawFilepath,
      rawCss: (await fs.readFileSync(rawFilepath)).toString(),
    };
  }

  render({ rawCss, rawFilepath }) {
    const compiledSass = sass.renderSync({
      data: rawCss,
      includePaths: [rawDir, nodeModulesDir],
    });

    return postcss([require('autoprefixer')])
      .process(compiledSass.css.toString(), {
        from: rawFilepath.replace('scss', 'css'),
      })
      .then((result) => result.css);
  }
};
