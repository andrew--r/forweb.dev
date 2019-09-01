const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины августа 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/">How Web Content Can Affect Power Usage</a></h3>
<p class="paragraph">Как фронтенд влияет на&nbsp;расход аккумулятора? Обзор факторов и&nbsp;практические советы по&nbsp;анализу и&nbsp;повышению энергоэффективности сайта от&nbsp;Саймона Фрейзера.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/blog/how-we-built-the-figma-plugin-system/">How to&nbsp;build a&nbsp;plugin system on&nbsp;the web and also sleep well at&nbsp;night</a></h3>
<p class="paragraph">Инженеры Figma подробно рассказали, как они продумали и&nbsp;реализовали систему плагинов, отвечающую их&nbsp;требованиям безопасности и&nbsp;быстродействия.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/en/company/miro/blog/458624/">Как мы&nbsp;учились рисовать тексты на&nbsp;Canvas</a></h3>
<p class="paragraph">Инженеры платформы для визуальной коллаборации Miro о&nbsp;нюансах отрисовки текста на&nbsp;Canvas, переезде с&nbsp;Flash на&nbsp;Canvas и&nbsp;отказе от&nbsp;SVG foreignObject.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2019/08/faster-image-loading-embedded-previews/">Faster Image Loading With Embedded Image Previews</a></h3>
<p class="paragraph">Обзор новой техники предзагрузки изображений, не&nbsp;требующей генерации отдельной версии картинки в&nbsp;маленьком разрешении.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://dropbox.design/article/design-tooling-at-scale">Design Tooling at&nbsp;Scale</a></h3>
<p class="paragraph">Дизайнеры Dropbox рассказали, как они переехали на&nbsp;Figma и&nbsp;организовали в&nbsp;ней свою кроссплатформенную дизайн-систему.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://tabnine.com">TabNine</a></h3>
<p class="paragraph">Умный автокомплит для любых языков программирования, использующий машинное обучение для предсказания намерений программиста.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.atulr.com/nodegui-intro/">Announcing NodeGUI and React NodeGUI</a></h3>
<p class="paragraph">Альтернатива Electron на&nbsp;основе Qt&nbsp;для разработки десктопных приложений: потребляет мало ресурсов, поддерживает TypeScript и&nbsp;стилизацию на&nbsp;CSS, есть React-версия (что-то вроде React Native).</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/">Using Native JavaScript Modules in&nbsp;Production Today</a></h3>
<p class="paragraph">Филип Уолтон развеивает распространённые опасения и&nbsp;показывает, как использовать ES-модули, чтобы ускорить загрузку сайта.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="http://adrianroselli.com/2019/08/basic-custom-control-requirements.html">Basic Custom Control Requirements</a></h3>
<p class="paragraph">Чеклист от&nbsp;Адриана Розелли для тех, кому нужно реализовать кастомный селект, календарь или любой другой не&nbsp;нативный контрол.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/updates/2019/08/native-file-system">The Native File System API: Simplifying access to&nbsp;local files</a></h3>
<p class="paragraph">Введение в&nbsp;Native File System API, новый API для работы с&nbsp;локальными файлами.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/WICG/virtual-scroller">A&nbsp;built-in virtual scroller for the web platform</a></h3>
<p class="paragraph">Предложение по&nbsp;добавлению в&nbsp;веб-платформу нативного API для реализации виртуального скролла.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://v8.dev/features/optional-chaining">Optional chaining</a></h3>
<p class="paragraph">ведение в&nbsp;optional chaining operator, позволяющий безопасно обращаться к&nbsp;глубоким полям во&nbsp;вложенных структурах.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/updates/2019/08/get-started-with-gpu-compute-on-the-web">Get started with GPU Compute on&nbsp;the Web</a></h3>
<p class="paragraph">Введение в&nbsp;GPU-вычисления в&nbsp;вебе.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
