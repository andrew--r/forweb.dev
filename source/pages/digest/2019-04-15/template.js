const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины апреля 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/lazy-loading/">Native image lazy-loading for the&nbsp;web!</a></h3>
<p class="paragraph">Новый (пока что экспериментальный) атрибут loading для ленивой загрузки изображений и&nbsp;iframe появится в&nbsp;Chrome&nbsp;75. Эдди Османи поделился подробностями и&nbsp;примерами использования.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blogs.windows.com/msedgedev/2019/04/08/microsoft-edge-preview-channel-details/">What to&nbsp;expect in&nbsp;the new Microsoft Edge Insider Channels</a></h3>
<p class="paragraph">Команда Microsoft Edge рассказала, чего ждать от&nbsp;новых сборок Edge на&nbsp;основе движка Chromium. Кстати, первые сборки для Windows 10 уже доступны.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/445878/">Избавляемся от&nbsp;дублей пакетов в&nbsp;бандлах</a></h3>
<p class="paragraph">Эдгар Нуруллин с&nbsp;обзором проблемы дублирования пакетов в&nbsp;бандлах и&nbsp;анонсом нового инструмента ostap для автоматического поиска и&nbsp;устранения дублей.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/lukeed/dimport">dimport</a></h3>
<p class="paragraph">Полифилл ES-модулей с&nbsp;поддержкой динамических импортов, работающий даже в&nbsp;IE.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/445932/">Безопасность клиентских приложений: практические советы для фронтенд-разработчиков</a></h3>
<p class="paragraph">Лучшие практики безопасности фронтенда в&nbsp;обзоре Александра Руденко из&nbsp;Райффайзенбанка.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/p/11b098a08815">Infinite Scroll&rsquo;ing the right way</a></h3>
<p class="paragraph">Инженеры Walmart Labs подробно разбирают важные нюансы реализации бесконечной прокрутки и&nbsp;предлагают собственную производительную реализацию на&nbsp;основе IntersectionObserver.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.theguardian.com/info/2019/apr/04/revisiting-the-rendering-tier">Revisiting the rendering tier</a></h3>
<p class="paragraph">Предыстория и&nbsp;причины модернизации фронтенда The Guardian: от&nbsp;62&nbsp;783 строк Sass до&nbsp;CSS-in-JS.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://cube.dev/">cube.js</a></h3>
<p class="paragraph">Опенсорсный фреймворк для аналитики со&nbsp;всей необходимой бэкенд-инфраструктурой и&nbsp;клиентскими&nbsp;SDK.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/04/z-index-component-based-web-application/">Managing Z-Index In&nbsp;A&nbsp;Component-Based Web Application</a></h3>
<p class="paragraph">Павел Померанцев рассказал о&nbsp;предсказуемом подходе к&nbsp;управлению z-index в&nbsp;приложениях, основанных на&nbsp;компонентом подходе.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.scottlogic.com/2019/04/03/upcoming-webhid-api.html">Upcoming WebHID API&nbsp;&mdash; access Bluetooth/USB HID devices in&nbsp;web applications</a></h3>
<p class="paragraph">Обзор нового WebHID API, который позволит веб-приложениям взаимодействовать со&nbsp;всевозможными Bluetooth/USB HID-девайсами вроде джойстиков, сенсоров или геймпадов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/04/understanding-subresource-integrity/">Understanding Subresource Integrity</a></h3>
<p class="paragraph">Дрю Маклиллан подробно объяснил, как защититься от&nbsp;подмены сторонних скриптов с&nbsp;помощью Subresource Integrity.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://codex.so/editor">Editor.js</a></h3>
<p class="paragraph">Опенсорсный расширяемый WYSIWYG-редактор c&nbsp;чистым JSON на&nbsp;выходе, используемый в&nbsp;VC, DTF и&nbsp;tjournal.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
