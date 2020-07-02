const locales = ['ru', 'en'];

module.exports = {
  url: 'https://forweb.dev',
  title: 'For Web',

  locales,
  defaultLocale: 'en',

  localeData: {
    en: {
      author: {
        name: 'Andrey Romanov',
        email: 'me@andreyromanov.com',
      },
      feeds: {
        articles: '/en/blog/feed.xml',
      },
    },
    ru: {
      author: {
        name: 'Андрей Романов',
        email: 'me@andreyromanov.com',
      },
      feeds: {
        articles: '/ru/blog/feed.xml',
        news: '/ru/news/feed.xml',
      },
    },
  },

  currentLocale(page) {
    const localeFromUrl = page.url.slice(1, 3).toLowerCase();

    return locales.includes(localeFromUrl) ? localeFromUrl : 'en';
  },
};
