const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины января 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://t.me/juliarderity/359">Финальный набор возможностей ES2019</a></h3>
<p class="paragraph">Сергей Рубанов с кратким обзором фич ES2019, утверждённых на прошедшей 29—31 января встрече TC39.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@firt/google-play-store-now-open-for-progressive-web-apps-ec6f3c6ff3cc">Google Play Store now open for Progressive Web Apps 😱</a></h3>
<p class="paragraph">Максимилиано Фиртман с обзором возможностей и проблем публикации PWA в Google Play, появившихся с релизом Trusted Web Activity в Chrome 72.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://webauthn.guide">Guide to Web Authentication</a></h3>
<p class="paragraph">Иллюстрированное руководство по Web Authentication, новому стандарту для аутентификации без паролей на основе криптографии с открытым ключом.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout">Approaches for a CSS Masonry Layout</a></h3>
<p class="paragraph">Крис Койер с обзором актуальных подходов к реализации masonry-раскладки на основе CSS.</p>

<h3 class="heading heading--2">Flow vs TypeScript</h3>
<p class="paragraph">Инженеры PayPal будут начинать новые проекты с TypeScript вместо Flow (<a target="_blank" rel="noopener noreferrer" href="https://medium.com/p/9d1acc07c839">статья</a>), инженеры MemSQL поделились опытом миграции 30 000 строк кода с Flow на TypeScript (<a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/436554">статья</a>), и даже <a target="_blank" rel="noopener noreferrer" href="https://github.com/yarnpkg/yarn/issues/6953">Yarn</a> и <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/jest/pull/7554">Jest</a>, разрабатываемые внутри Facebook, объявили о переходе с Flow на TypeScript.</p>
<p class="paragraph">Тем временем разработчики Flow <a target="_blank" rel="noopener noreferrer" href="https://medium.com/p/54239c62004f">объяснили</a>, почему они игнорировали опенсорс-сообщество, чем занимались весь прошлый год и как они относятся к переходу некоторых проектов Facebook на TypeScript.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/01/html5-input-types">HTML5 Input Types: Where Are They Now?</a></h3>
<p class="paragraph">В HTML5 было добавлено 13 новых видов инпутов. Дрю Маклиллан разобрался, какие из них в 2019 году можно применять с пользой и безбоязненно, а каких стоит избегать.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/">Why I've stopped exporting defaults from my JavaScript modules</a></h3>
<p class="paragraph">Мнение создателя ESLint Николаса Закаса о проблемах дефолтных экспортов и преимуществах отказа от них в пользу именованных.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/tehcookies/bundlers-comparison">tehcookies/bundlers-comparison</a></h3>
<p class="paragraph">Какой бандлер выбрать: Webpack, Parcel или Rollup? Сравнение скорости, размера итогового бандла и простоты использования.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
