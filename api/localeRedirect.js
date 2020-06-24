const { pick } = require('accept-language-parser');
const siteData = require('../src/site/_data/site');

module.exports = (request, response) => {
  const matchedLocale =
    pick(siteData.locales, request.headers['accept-language']) ||
    siteData.defaultLocale;

  console.log('[localeRedirect] Matched locale:', matchedLocale);

  response.writeHead(302, {
    location: `/${matchedLocale}`,
  });

  response.end();
};
