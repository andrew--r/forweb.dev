const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины января 2019</p>

<h3 class="heading heading--2"><a href="https://blog.github.com/2019-01-07-new-year-new-github/">Бесплатные приватные репозитории на GitHub</a></h3>
<p class="paragraph">Приватные репозитории на GitHub теперь бесплатны для разработчиков, единственное ограничение — не больше трёх коллабораторов. Забавный факт: анонс <a href="https://mobile.twitter.com/matthewhughes/status/1082343527797977090">опубликовали на день раньше</a> планируемого из-за <a href="https://mobile.twitter.com/matthewhughes/status/1082325484678057984">плохого UX WordPress</a>.</p>

<h3 class="heading heading--2"><a href="https://www.smashingmagazine.com/2019/01/how-to-learn-css/">How To Learn CSS</a></h3>
<p class="paragraph">Обзор фундаментальных концепций CSS и ресурсов для их изучения от Рейчел Эндрю.</p>

<h3 class="heading heading--2"><a href="https://glebbahmutov.com/blog/dont-help-me-say-no/">Don't help me say No</a></h3>
<p class="paragraph">Распространённые ошибки соискателей с точки зрения работодателя: Глеб Бахмутов рассказал, что вынуждает его отказывать кандидатам.</p>

<h3 class="heading heading--2"><a href="https://24ways.org/2018/jank-free-image-loads/">Jank-Free Image Loads</a></h3>
<p class="paragraph">Эрик Портис о двух новых возможностях веб-платформы, которые позволят избежать перерисовки страницы при загрузке картинок: CSS-свойство <code>aspect-ratio</code> и HTML-атрибут <code>intrinsicsize</code>.</p>

<h3 class="heading heading--2"><a href="https://facebookincubator.github.io/fbt/">FBT</a></h3>
<p class="paragraph">Инженеры Facebook выложили в опенсорс собственный фреймворк для интернационализации интерфейсов. API на чистом JS, хорошая интеграция с Реактом.</p>

<h3 class="heading heading--2"><a href="https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/">Чеклист быстродействия фронтенда в 2019 году</a></h3>
<p class="paragraph">Обновлённый ежегодный чеклист от Виталия Фридмана, содержащий всё, что нужно знать для разработки быстрого фронтенда. Помимо онлайн-версии есть PDF, Apple Pages и MS Word.</p>

<h3 class="heading heading--2"><a href="https://overreacted.io/the-elements-of-ui-engineering/">The Elements of UI Engineering</a></h3>
<p class="paragraph">Дэн Абрамов с обзором основных проблемах разработки качественных интерфейсов. Дэн считает, что самостоятельное решение любой из этих проблем без библиотек и фреймворков — отличный способ прокачаться.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
