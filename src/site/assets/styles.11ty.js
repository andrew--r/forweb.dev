const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const fileName = 'styles.css';
const rawFilepath = path.join(__dirname, `../_includes/styles/index.css`);

module.exports = class {
  async data() {
    return {
      permalink: `assets/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  render({ rawCss, rawFilepath }) {
    return postcss([
      require('autoprefixer'),
      require('postcss-easy-import'),
      require('postcss-color-function'),
      require('postcss-selector-matches'),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};
