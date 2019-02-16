const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины февраля 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web">Рендеринг в вебе</a></h3>
<p class="paragraph">От серверного до клиентского рендеринга: обстоятельный обзор существующих подходов и их преимуществ/недостатков от Эдди Османи и Джейсона Миллера.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://stateofcss.com/">The State of CSS 2019</a></h3>
<p class="paragraph">Первый ежегодный опрос о состоянии и трендах CSS и его экосистемы от создателей The State of JavaScript.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/p/c5046c563640">Новые логические свойства в CSS!</a></h3>
<p class="paragraph">Следующий шаг в эволюции CSS: новые логические свойства, облегчающие вёрстку мультиязычных сайтов. Обзор Элада Шехтера в переводе Алёны Батицкой.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://googlefonts.3perf.com/">Ускоритель Google Fonts</a></h3>
<p class="paragraph">Микроскрипт от Ивана Акулова, ускоряющий отрисовку текста на 1—2 секунды в медленной сети за счёт инъекции font-display в файл стилей Google Fonts.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-live.ru/articles/css-i-proizvoditelnost-seti.html">CSS и производительность сети</a></h3>
<p class="paragraph">Подробное исследование и рекомендации Гарри Робертса в переводе CSS-Live.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.pikapkg.com/blog/introducing-pika-pack/">@pika/pack</a></h3>
<p class="paragraph">Новый инструмент для публикации NPM-пакетов, автоматизирующий большинство оптимизаций и нюансов, о которых вы могли и не знать (например, удаление из пакета ненужных файлов, используемых только при разработке).</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/p/438598/">React и БЭМ: официальная коллаборация. Часть историческая</a></h3>
<p class="paragraph">Антон Виноградов о предпосылках и сложностях перехода поиска Яндекса на React.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://instant.page/">instant.page</a></h3>
<p class="paragraph">Микроскрипт для ускорения переходов между страницами, применяющий предзагрузку прямо перед кликом пользователя по ссылке.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.polymer-project.org/blog/2019-02-05-lit-element-and-lit-html-release">lit-html 1.0 и LitElement 2.0</a></h3>
<p class="paragraph">Релиз быстрого и лёгкого шаблонизатора lit-html и базового класса для удобной разработки веб-компонентов LitElement от Google.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
