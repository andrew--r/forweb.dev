const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины апреля 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.cloudflare.com/announcing-amp-real-url/">Announcing AMP Real URL</a></h3>
<p class="paragraph">Инженеры Cloudflare придумали и&nbsp;реализовали способ отвязать AMP-страницы от&nbsp;Google и&nbsp;раздавать их&nbsp;под оригинальным доменом сайта.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/yandex/blog/446780/">Как создать тёмную тему и&nbsp;не&nbsp;навредить</a></h3>
<p class="paragraph">Инженеры Яндекс.Почты о&nbsp;трёх основных способах реализации тёмной темы и&nbsp;нюансах каждого из&nbsp;них.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://open-registry.dev/">The Open-Registry</a></h3>
<p class="paragraph">Полностью прозрачный и&nbsp;открытый реестр JS-пакетов, призванный заменить централизованный и&nbsp;коммерческий&nbsp;NPM.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/how-to-get-a-progressive-web-app-into-the-google-play-store/">How to&nbsp;Get a&nbsp;Progressive Web App into the Google Play Store</a></h3>
<p class="paragraph">Пошаговое руководство по&nbsp;упаковке прогрессивного веб-приложения в&nbsp;нативную обёртку и&nbsp;публикации результата в&nbsp;Google Play Store.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f">Introducing Node.js&nbsp;12</a></h3>
<p class="paragraph">Вышла Node.js 12 с&nbsp;экспериментальной поддержкой ES-модулей, диагностическими отчётами и&nbsp;другими нововведениями.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://svelte.dev/blog/svelte-3-rethinking-reactivity">Svelte 3: Rethinking reactivity</a></h3>
<p class="paragraph">Вышла третья версия Svelte, компилируемого фреймворка с&nbsp;минимальным рантаймом: новый сайт и&nbsp;документация, встроенная реактивность, улучшенный&nbsp;DX.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/04/design-scale-figma/">Design At&nbsp;Scale: One Year With Figma</a></h3>
<p class="paragraph">Пол Ханаока из&nbsp;Liferay рассказал, как переход на&nbsp;Figma помог улучшить дизайн-процессы в&nbsp;компании.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.filamentgroup.com/lab/html-includes/">HTML Includes That Work Today</a></h3>
<p class="paragraph">Скот Йель из&nbsp;Filament Group делится экспериментальной техникой подключения внешних SVG и&nbsp;HTML-файлов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://mathiasbynens.be/notes/globalthis">A&nbsp;horrifying globalThis polyfill in&nbsp;universal JavaScript</a></h3>
<p class="paragraph">Матиас Байненс подробно рассказал о&nbsp;нюансах реализации полифила глобального объекта для любых окружений.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/449368/">Нужно&nbsp;ли чистить строки в&nbsp;JavaScript?</a></h3>
<p class="paragraph">Обзор возможной утечки памяти, вызванной оптимизацией работы со&nbsp;строками, и&nbsp;способы её&nbsp;предотвращения.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="http://designpatternsgame.com/">Design Patterns Game</a></h3>
<p class="paragraph">Игра на&nbsp;знание распространённых паттернов проектирования, реализованных на&nbsp;JavaScript.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://projectfluent.org/">Fluent</a></h3>
<p class="paragraph">Новая система локализации интерфейсов от&nbsp;Mozilla, используемая в&nbsp;Firefox и&nbsp;вдохновлённая XLIFF и&nbsp;ICU MessageFormat.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));