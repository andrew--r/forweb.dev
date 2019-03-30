const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины марта 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://boolean.method.ac/">The Boolean Game</a></h3>
<p class="paragraph">Игра для практического изучения булевых операций над многоугольниками, используемых в графических редакторах.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://3perf.com/blog/link-rels/">Preload, prefetch and other &lt;link&gt; tags</a></h3>
<p class="paragraph">Какие есть теги-подсказки для улучшения производительности и когда их применять? Подробный обзор Ивана Акулова.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/">Standardizing WASI: A system interface to run WebAssembly outside the web</a></h3>
<p class="paragraph">WASI — системный интерфейс WebAssembly, который позволит выполнять программы на WebAssembly за пределами веба и практически на любой платформе. Лин Кларк подробно рассказала, зачем он нужен и как он устроен.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/445166/">Всё, что нужно знать об автоматических переносах в CSS</a></h3>
<p class="paragraph">Ричард Раттер о переносах текста в вебе в переводе на Хабре.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@stasonmars/css-%D1%81%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B-4-%D0%B3%D0%BE-%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D1%8F-af1a5170620c">CSS-селекторы четвёртого уровня</a></h3>
<p class="paragraph">Стас Багрецов перевёл обширный обзор новых CSS-селекторов, некоторые из которых можно применять уже сегодня.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/yandex/blog/442762/">Стажёр Вася и его истории об идемпотентности AP</a></h3>
<p class="paragraph">Какие проблемы могут возникнуть, если не учитывать идемпотентность распределенных систем в своем проекте, и как эти проблемы решать? Подробное объяснение с примерами от Дениса Исаева из Яндекс.Такси.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="http://jeremymikkola.com/posts/2019_03_19_rules_for_autocomplete.html">Rules for Autocomplete</a></h3>
<p class="paragraph">Джереми Миккола поделился чеклистом лучших практик реализации автокомплита с хорошим UX.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/company/hh/blog/445816/">Как мы пилили серверный рендеринг и что из этого вышло</a></h3>
<p class="paragraph">Инженеры HeadHunter рассказали о мотивации, процессе, проблемах и решениях реализации серверного рендеринга для их сервиса.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.flexulator.com/">Flexulator</a></h3>
<p class="paragraph">Интерактивная визуализация механизма расчёта размеров флекс-элементов на основе basis/shrink/grow.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Raathigesh/majestic">Majestic</a></h3>
<p class="paragraph">GUI к тест-раннеру Jest для тех, кто не любит консольные интерфейсы.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/leeoniya/dropcss">dropcss</a></h3>
<p class="paragraph">Быстрый и простой в использовании инструмент для удаления мёртвого CSS-кода.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
