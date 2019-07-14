const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины июля 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://ota-solid.now.sh/">SOLID</a></h3>
<p class="paragraph">Книга Саши Беспоясова и&nbsp;Артёма Самофалова о&nbsp;проектировании устойчивых систем с&nbsp;помощью принципов&nbsp;ООП. Код на&nbsp;TypeScript, интерактивные тесты в&nbsp;конце каждой главы, примеры из&nbsp;реальной жизни.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/783ccP__No8">GraphQL: The Documentary</a></h3>
<p class="paragraph">Документальный фильм об&nbsp;истории создания и&nbsp;развития GraphQL.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/458640/">В&nbsp;поисках длинного тире</a></h3>
<p class="paragraph">Базовые типографические правила русского языка в&nbsp;карточках от&nbsp;Вани Соловьёва из&nbsp;DocDoc: кавычки, виды тире, валюты, отбивка чисел, висячие предлоги, номера телефонов, время, адреса, даты и&nbsp;многое другое.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/p/459206/">9 лет в&nbsp;монолите на&nbsp;Node.js</a></h3>
<p class="paragraph">Евгений Бондаренко о&nbsp;плюсах и&nbsp;минусах монолита и&nbsp;микросервисов на&nbsp;основе реального опыта OneTwoTrip.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="http://www.graspjs.com/">grasp</a></h3>
<p class="paragraph">Утилита для продвинутого рефакторинга и&nbsp;поиска по&nbsp;JS-коду на&nbsp;основе его структуры</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://jlongster.com/secret-of-good-electron-apps">The Secret of&nbsp;Good Electron Apps</a></h3>
<p class="paragraph">Секрет хороших приложений на&nbsp;Electron заключается в&nbsp;использовании фонового процесса, считает Джеймс Лонг и&nbsp;рассказывает о&nbsp;преимуществах такого подхода.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://hermesengine.dev/">Hermes</a></h3>
<p class="paragraph">Новый JS-движок для Android-приложений на&nbsp;React Native: потребляет меньше памяти, запускается быстрее и&nbsp;уменьшает вес&nbsp;APK.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://v8.dev/features/weak-references">Weak references and finalizers</a></h3>
<p class="paragraph">Обзор нового API для создания слабых ссылок на&nbsp;объекты и&nbsp;подписки на&nbsp;их&nbsp;удаление сборщиком мусора.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://www.levelupwasm.com/">Level Up&nbsp;with WebAssembly</a></h3>
<p class="paragraph">Практическая книга о&nbsp;применении WebAssembly в&nbsp;браузере.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));
