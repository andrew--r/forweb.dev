const locales = ['ru', 'en'];

module.exports = {
  url: 'https://forweb.dev',
  title: 'For Web',

  locales,
  defaultLocale: 'en',

  feeds: {
    ru: {
      articles: '/ru/blog/feed.xml',
      news: '/ru/news/feed.xml',
    },
  },

  currentLocale(page) {
    const localeFromUrl = page.url.slice(1, 3).toLowerCase();

    return locales.includes(localeFromUrl) ? localeFromUrl : 'en';
  },
};
