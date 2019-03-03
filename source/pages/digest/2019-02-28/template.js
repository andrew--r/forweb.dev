const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины февраля 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://jasonformat.com/application-holotypes/">Application Holotypes: A Guide to Architecture Decisions</a></h3>
<p class="paragraph">Обзор типовых видов веб-приложений и их характеристик, ограничений и рекомендаций по реализации от Джейсона Миллера.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/bdc/status/1100921258839953408">Новые математические функции в CSS</a></h3>
<p class="paragraph">Вести с полей от Бенджамина Де Кока: рабочая группа CSS договорилась о добавлении в язык новых математических функций clamp, sin, cos, tan, acos, asin, atan, atan2, hypot, sqrt, pow.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://zeroserver.io/">Zero Server</a></h3>
<p class="paragraph">Максимально простой в использовании и не требующий настройки веб-сервер с поддержкой Node.js, React, HTML и Markdown.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/script-priorities/">JavaScript Loading Priorities in Chrome</a></h3>
<p class="paragraph">Эдди Османи с обзором способов подключения скриптов, объяснением их влияния на производительность и рекомендациями по использованию каждого способа.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://nodesecroadmap.fyi/">A Roadmap for Node.js Security</a></h3>
<p class="paragraph">Подробный обзор угроз безопасности и способов защиты проектов на Node.js.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://evilmartians.com/chronicles/better-web-video-with-av1-codec">Better web video with AV1 codec</a></h3>
<p class="paragraph">Андрей Ситник с введением в использование нового видеокодека AV1 в вебе и примером конвертации гифок в видео для максимальной экономии ресурсов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/p/1a144c2317a9">TSLint in 2019</a></h3>
<p class="paragraph">Создатели TSLint о планах на будущее: постепенный отказ от развития своего инструмента и фокус на поддержке TypeScript в ESLint.</p>


<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/Cvz-9ccflKQ">Документальный фильм об Ember.js</a></h3>
<p class="paragraph">История, стоящая за Ember.js: кем, как и зачем был создан фреймворк и как он развивался.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/XBfi3Q74BnE">Make frontend “backend” again</a></h3>
<p class="paragraph">Хороший доклад Николая Рыжикова о том, как эволюционировал подход к разработке бэкенда и что из него могут позаимствовать фронтендеры, чтобы разрабатывать интерфейсы эффективнее.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
