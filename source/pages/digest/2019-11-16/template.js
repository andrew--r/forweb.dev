const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины ноября 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/web-standards/a11y-and-law-a81dd9dd5fc8">Доступность и&nbsp;закон</a></h3>
<p class="paragraph">Татьяна Фокина разбирается, какие в&nbsp;США, Евросоюзе и&nbsp;России есть законы и&nbsp;стандарты о&nbsp;веб-доступности и&nbsp;что будет за&nbsp;их&nbsp;нарушение.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/9aXRJ8Z-kxA">&laquo;Фронтенд-юность&raquo; № 114: тёплый выпуск с&nbsp;Дэном Абрамовым</a></h3>
<p class="paragraph">Большое русскоязычное интервью с&nbsp;Дэном Абрамовым: популярность и&nbsp;Твитер, доминирование Реакта, конкуренция фреймворков, опенсорс, UX&nbsp;и&nbsp;DX, разработка в&nbsp;Фейсбуке, увлечения Дэна и&nbsp;многое другое.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.heartinternet.uk/blog/best-practices-for-optimising-video-streams-on-the-web/">Best practices for optimising video streams on&nbsp;the web</a></h3>
<p class="paragraph">Хороший обзор адаптивной потоковой передачи видео в&nbsp;вебе: зачем её&nbsp;использовать, как она устроена под капотом, лучшие практики реализации.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/babel/preset-modules">@babel/preset-modules</a></h3>
<p class="paragraph">Новый пресет для компиляции кода под современные браузеры, исправляющий браузерные баги и&nbsp;неточности реализации современных возможностей&nbsp;JS. На&nbsp;выходе даёт более гораздо более компактный код, чем @babel/preset-env.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://about.gitlab.com/blog/2019/11/07/how-gitlab-pages-made-our-sketch-design-handoffs-easier-and-faster/">How GitLab Pages made our Sketch design handoffs easier and faster</a></h3>
<p class="paragraph">Дизайнеры GitLab рассказали о&nbsp;своём процессе передачи макетов разработчикам, позволяющем экономить время и&nbsp;даже деньги.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/Web-Components-bookmarks-64066078f891433dbc74997dc4d64302">Web Components Bookmarks</a></h3>
<p class="paragraph">Коллекция актуальных ресурсов о&nbsp;веб-компонентах от&nbsp;Сергея Куликова: от&nbsp;стандартов до&nbsp;лучших практик и&nbsp;готовых компонентов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/474400/">Мифы о&nbsp;доступности цветового контраста</a></h3>
<p class="paragraph">Разрушение распространённых заблуждений о&nbsp;требованиях к&nbsp;контрастности цветов в&nbsp;переводе на&nbsp;Хабре.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://2ality.com/2019/10/type-coercion.html">Type coercion in&nbsp;JavaScript</a></h3>
<p class="paragraph">Подробный обзор механизма приведения типов в&nbsp;JavaScript от&nbsp;Акселя Раушмайера.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://almanac.httparchive.org/en/2019/">The 2019 Web Almanac</a></h3>
<p class="paragraph">Ежегодный отчёт о&nbsp;состоянии веба от&nbsp;HTTP Archive: анализ содержимого, используемых технологий и&nbsp;UX&nbsp;миллионов сайтов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/post/codesandbox-ci-embeds">Announcing CodeSandbox CI&nbsp;and all-new Embeds</a></h3>
<p class="paragraph">Анонс нового бесплатного CI-сервиса для опенсорсных JavaScript-библиотек, уже используемого популярными проектами вроде React, Babel, Framer и&nbsp;Material&nbsp;UI.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://instagram-engineering.com/making-instagram-com-faster-code-size-and-execution-optimizations-part-4-57668be796a8">Making instagram.com faster: Code size and execution optimizations&nbsp;(Part 4)</a></h3>
<p class="paragraph">Четвёртая часть рассказа об&nbsp;ускорении веб-версии Instagram, на&nbsp;этот раз об&nbsp;оптимизации парсинга и&nbsp;выполнения кода.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
