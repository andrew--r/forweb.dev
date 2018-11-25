const renderHead = require('./head/template');
const renderHeader = require('./header/template');
const renderFooter = require('./footer/template');

module.exports = (context, children, { headContent } = {}) => `
<!DOCTYPE html>
<html lang="${context.siteData.lang}">
${renderHead(context, headContent)}
<body class="page">
  <div class="page__header">
    ${renderHeader(context)}
  </div>

  <main class="page__content">
    ${children}
  </main>

  <div class="page__footer">
    ${renderFooter(context)}
  </div>

  <style>
    @font-face {
      font-family: 'Fira Code';
      src: local('Fira Code'), url('${context.getAssetUrl(
        'fonts/fira-code/regular.woff2',
      )}'),
        url('${context.getAssetUrl('fonts/fira-code/regular.woff')}');
      font-weight: 400;
      font-display: swap;
    }
  </style>
</body>
</html>
`;
