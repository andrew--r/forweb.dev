const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины декабря 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://csslayout.io">CSS Layout</a></h3>
<p class="paragraph">Большая коллекция примеров вёрстки распространённых UI-компонентов и&nbsp;раскладок.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://wattenberger.com/guide/scaling-svg">Scaling SVG Elements</a></h3>
<p class="paragraph">Амелия Уотэнберг с&nbsp;интерактивным объяснением принципа масштабирования SVG-элементов через viewBox.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://dev.to/christiankohler/one-bite-at-a-time-how-to-introduce-new-lint-rules-in-a-large-codebase-37ph">One bite at&nbsp;a&nbsp;time&nbsp;&mdash; How to&nbsp;introduce new lint rules in&nbsp;a&nbsp;large codebase</a></h3>
<p class="paragraph">Кристиан Колер предлагает разумный подход к&nbsp;внедрению новых правил линтинга в&nbsp;больших проектах.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://marinintim.com/2019/indieweb/">24 дня индивеба</a></h3>
<p class="paragraph">Рождественский календарь Тима Маринина о&nbsp;том, что такое индивеб, зачем он&nbsp;нужен и&nbsp;как к&nbsp;нему приобщиться.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/">The unseen performance costs of&nbsp;modern CSS-in-JS libraries in&nbsp;React apps</a></h3>
<p class="paragraph">Практическое исследование того, как генерация и&nbsp;парсинг стилей в&nbsp;рантайме влияют на&nbsp;быстродействие.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/paulirish/lite-youtube-embed">Lite YouTube Embed</a></h3>
<p class="paragraph">Легковесный скрипт Пола Айриша для встраивания видео с&nbsp;YouTube, в&nbsp;~200 раз быстрее стандартного.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://calendar.perfplanet.com/2019/javascript-component-level-cpu-costs/">JavaScript component-level CPU costs</a></h3>
<p class="paragraph">Стоян Стефанов рассказал, зачем и&nbsp;как измерять нагрузку JS-компонентов на&nbsp;CPU.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/Provider/Style/URI">Cool URIs don&rsquo;t change</a></h3>
<p class="paragraph">Тим Бернерс-Ли рассказывает, почему важно не&nbsp;менять адреса документов в&nbsp;вебе и&nbsp;как проектировать долговечные URI</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://24ways.org/2019/making-a-better-custom-select-element/">Making a&nbsp;Better Custom Select Element</a></h3>
<p class="paragraph">Джули Гранди рассказала, как реализовать доступный кастомный select.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
