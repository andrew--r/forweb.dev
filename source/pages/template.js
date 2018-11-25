const layout = require('../partials/layout/template');

const renderPage = () => `
<h2 class="heading heading--1">
  Годнота для&nbsp;фронтендеров и&nbsp;дизайнеров в&nbsp;<a href="https://t.me/forwebdev">Телеграме</a>, <a href="https://vk.com/forwebdev">ВКонтакте</a> и&nbsp;<a href="https://twitter.com/forwebdev">Твитере</a>
</h2>

<p class="paragraph">Наши статьи и&nbsp;переводы:</p>

<ul class="list">
  <li class="list__item">
    <a href="https://github.com/forwebdev/ui-developer-tips">
      Советы для&nbsp;разработчика интерфейсов
    </a>
  </li>
  <li class="list__item">
    <a href="/blog/about-postcss">
      О&nbsp;PostCSS от его создателя: интервью с&nbsp;Андреем Ситником
    </a>
  </li>
  <li class="list__item">
    <a href="/blog/8-things-for-beginners">8&nbsp;вещей, которые я хотел&nbsp;бы знать в&nbsp;начале карьеры</a> <sup>перевод</sup>
  </li>
  <li class="list__item">
    <a href="/blog/principles-for-writing-idiomatic-html">Принципы написания однородного, идиоматического HTML</a> <sup>перевод</sup>
  </li>
</ul>
`;

module.exports = (context) => layout(context, renderPage(context));
