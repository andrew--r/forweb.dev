const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины марта 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://drafts.csswg.org/css-nesting-1/">CSS Nesting Module</a></h3>
<p class="paragraph">Хорошие новости: рабочая группа CSS одобрила черновик спецификации вложенных селекторов, давно доступных в препроцессорах. Ждём дальнейшего развития событий.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/updates/2019/03/kv-storage">KV Storage: the Web's First Built-in Module</a></h3>
<p class="paragraph">Команда Chrome экспериментирует с расширением стандартной библиотеки, добавляя встроенные в браузер модули. Уже можно попробовать первый модуль — KV Storage (асинхронная замена localStorage).</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/progressive-web-apps/desktop">Desktop Progressive Web Apps</a></h3>
<p class="paragraph">С релизом Chrome 73 прогрессивные веб-приложения поддерживаются на всех основных десктопных платформах: Windows, macOS и Linux.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/">Designing An Aspect Ratio Unit For CSS</a></h3>
<p class="paragraph">Рейчел Эндрю от лица рабочей группы CSS рассказала о процессе и результатах проектирования новой единицы измерения aspect-ratio.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/p/441898/">Sketch + Node.js: генерируем иконки для множества платформ и брендов</a></h3>
<p class="paragraph">Инженеры Badoo поделились опытом автоматизации сложного процесса работы с иконками в большом продукте.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/web-standards/aria-live-regions-713f6a7813d3">Всё, что нужно знать про ARIA Live Regions</a></h3>
<p class="paragraph">Татьяна Фокина рассказала, как сделать обновление содержимого страницы доступным для скринридеров.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/questions/34855352/how-in-general-does-node-js-handle-10-000-concurrent-requests">How, in general, does Node.js handle 10,000 concurrent requests?</a></h3>
<p class="paragraph">Иллюстрированное объяснение того, почему и как Node.js справляется с обработкой 10 000 параллельных запросов без многопоточности.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://csswizardry.com/2019/03/cache-control-for-civilians/">Cache-Control for Civilians</a></h3>
<p class="paragraph">Гарри Робертс с подробным объяснением механики работы и вариантов использования HTTP-заголовка Cache-Control для управления кешем.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/443032/">Веб-компоненты в реальном мире</a></h3>
<p class="paragraph">Борис Сердюк об обычно умалчиваемых особенностях использования веб-компонентов и сценариях их оправданного применения.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/YHPWG23cS4c">Пишем простой сервер с кластеризацией на Node.js</a></h3>
<p class="paragraph">Андрей Мелихов объяснил, как модуль cluster может помочь в разработке отказоустойчивого сервера, способного выдерживать большие нагрузки.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://microsoft.github.io/frontend-bootcamp/">Frontend Bootcamp</a></h3>
<p class="paragraph">Двухдневный воркшоп Microsoft по основам фронтенда: от HTML/CSS/JS/React до тестирования, управления состоянием и TypeScript</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/pikapkg/web">@pika/web</a></h3>
<p class="paragraph">Инструмент, возвращающий во фронтенд былую простоту: используйте ES-модули прямо из NPM в браузере без конфигурации и сборщиков вроде вебпака.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://books.thoughtbot.com/assets/goal-oriented-git.pdf">Goal-Oriented Git (PDF, 300 КБ)</a></h3>
<p class="paragraph">Книга-руководство по Git с фокусом на решении распространённых задач, без погружения в сложную терминологию и внутренние детали работы.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://felix-kling.de/js-loose-comparison/">JavaScript “loose” comparison step by step</a></h3>
<p class="paragraph">Пошаговая визуализация алгоритма нестрого сравнения (==) с приведением типов в JavaScript.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
