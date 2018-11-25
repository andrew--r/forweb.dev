const layout = require('../../../partials/layout/template');

const renderPage = () => `
<article>
  <h2 class="heading heading--1">
    Принципы написания однородного HTML
  </h2>

  <p class="paragraph paragraph--lead">
    Этот документ представляет собой общие рекомендации по&nbsp;стилю написания HTML-разметки. Данное руководство призывает к&nbsp;использованию общепринятых и&nbsp;устоявшихся подходов к&nbsp;написанию кода.
  </p>

  <h3 class="heading heading--2">1. Основные принципы</h3>

  <ul class="list">
    <li class="list__item">
      Весь код в&nbsp;любой базе исходников должен выглядеть так, будто его написал один человек, вне зависимости от&nbsp;реального количества разработчиков.
    </li>
    <li class="list__item">
      Строго следуйте принятому стилю.
    </li>
    <li class="list__item">
      Если вы&nbsp;сомневаетесь в&nbsp;том, какой стиль использовать, пользуйтесь общепринятыми и&nbsp;устоявшимися подходами.
    </li>
  </ul>

  <h3 class="heading heading--2">2. Пустое пространство</h3>
  <p class="paragraph">
    В&nbsp;вашей базе исходных кодов должен существовать лишь один стиль написания кода. Всегда согласованно используйте пустое пространство. Используйте пустое пространство для улучшения читаемости кода.
  </p>

  <ul class="list">
    <li class="list__item">
      Никогда не&nbsp;смешивайте табы и&nbsp;пробелы в&nbsp;отступах.
    </li>
    <li class="list__item">
      Выберите между мягкой табуляцией (пробелы) и&nbsp;реальными табами. Придерживайтесь выбранного подхода. (Предпочтительно: мягкая табуляция)
    </li>
    <li class="list__item">
      Если вы&nbsp;используете пробелы, выберите количество символов для отступа. (Предпочтительно: 4&nbsp;пробела)
    </li>
  </ul>

  <p class="paragraph">
    Совет: настройте свой текстовый редактор так, чтобы он&nbsp;показывал непечатные символы. Это позволит вам устранить появление лишних пробелов и&nbsp;табов в&nbsp;конце строк или ещё где-либо.
  </p>

  <h3 class="heading heading--2">3. Форматирование</h3>
  <ul class="list">
    <li class="list__item">
      Названия тегов и&nbsp;атрибутов всегда пишите в&nbsp;нижнем регистре.
    </li>
    <li class="list__item">
      На&nbsp;одной строке размещайте только один элемент.
    </li>
    <li class="list__item">
      Используйте дополнительный уровень отступов для каждого вложенного элемента.
    </li>
    <li class="list__item">
      Указывайте атрибуты без их&nbsp;значения, если это возможно (например, <code>checked</code> вместо <code>checked="checked"</code>).
    </li>
    <li class="list__item">
      Всегда используйте двойные кавычки для значений атрибутов.
    </li>
    <li class="list__item">
      Не&nbsp;указывайте атрибут <code>type</code> в&nbsp;элементах <code>link</code>, <code>style</code> и <code>script</code>.
    </li>
    <li class="list__item">Всегда закрывайте теги.</li>
    <li class="list__item">
      Не&nbsp;используйте слеш в&nbsp;единичных тегах (<code><img></code> &mdash; правильно, <code><img/></code> &mdash; неправильно).
    </li>
  </ul>

  <p class="paragraph">
    (Сохраняйте длину строки в&nbsp;пределах разумного максимума, например 80&nbsp;символов.)
  </p>

  <p class="paragraph">Пример:</p>

  <pre><code>&lt;div class=&quot;tweet&quot;&gt;
    &lt;a href=&quot;path/to/somewhere&quot;&gt;
        &lt;img src=&quot;path/to/image.png&quot; alt=&quot;&quot;&gt;
    &lt;/a&gt;
    &lt;p&gt;[tweet text]&lt;/p&gt;
    &lt;button disabled&gt;Reply&lt;/button&gt;
&lt;/div&gt;</code></pre>

  <h4 class="heading heading--3">
    Исключения и&nbsp;небольшие допущения
  </h4>

  <p class="paragraph">
    В&nbsp;элементах с&nbsp;несколькими атрибутами эти атрибуты можно расположить на&nbsp;отдельных строках, чтобы улучшить читабельность:
  </p>

  <pre><code>&lt;a class=&quot;[value]&quot;
 data-action=&quot;[value]&quot;
 data-id=&quot;[value]&quot;
 href=&quot;[url]&quot;&gt;
    &lt;span&gt;[text]&lt;/span&gt;
&lt;/a&gt;</code></pre>

  <h3 class="heading heading--2">4. Порядок атрибутов</h3>

  <p class="paragraph">
    HTML-атрибуты должны быть перечислены в&nbsp;порядке, учитывающем&nbsp;то, что названия классов&nbsp;&mdash; базовая вещь, которая позволяет выбирать элементы с&nbsp;помощью JavaScript или CSS:
  </p>

  <ol class="list">
    <li class="list__item">
      <code>class</code>
    </li>
    <li class="list__item">
      <code>id</code>
    </li>
    <li class="list__item">
      <code>data-*</code>
    </li>
    <li class="list__item">Любые другие атрибуты</li>
  </ol>

  <p class="paragraph">Пример:</p>

  <pre><code>&lt;a class=&quot;[value]&quot; id=&quot;[value]&quot; data-name=&quot;[value]&quot; href=&quot;[url]&quot;&gt;[text]&lt;/a&gt;</code></pre>

  <h3 class="heading heading--2">5. Именование</h3>

  <p class="paragraph">
    Именование&nbsp;&mdash; вещь сложная, но&nbsp;очень важная. Это ключевая часть процесса написания поддерживаемого кода. Без правильного именования невозможно иметь относительно масштабируемый интерфейс между HTML и&nbsp;CSS/JS.
  </p>

  <ul class="list">
    <li class="list__item">
      Используйте простые, понятные и&nbsp;уместные имена для классов. Имена должны быть информативны вне зависимости от&nbsp;контекста&nbsp;&mdash; как в&nbsp;разметке, так и&nbsp;в&nbsp;CSS-файлах.
    </li>
    <li class="list__item">
      Избегайте систематического сокращения имён классов. Не&nbsp;усложняйте код.
    </li>
  </ul>

  <p class="paragraph">Пример с&nbsp;плохим именованием классов:</p>

  <pre><code>&lt;div class=&quot;cb s-scr&quot;&gt;&lt;/div&gt;</code></pre>

  <pre><code>.s-scr {
  overflow: auto;
}

.cb {
  background: #000;
}</code></pre>

  <p class="paragraph">Хороший пример именования:</p>

  <pre><code>&lt;div class=&quot;column-body is-scrollable&quot;&gt;&lt;/div&gt;</code></pre>

  <pre><code>.is-scrollable {
    overflow: auto;
}

.column-body {
    background: #000;
}</code></pre>

  <h3 class="heading heading--2">6. Практический пример</h3>

  <p class="paragraph">Пример различных соглашений.</p>

  <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;utf-8&quot;&gt;
        &lt;title&gt;Document&lt;/title&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;main.css&quot;&gt;
        &lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;article class=&quot;post&quot; id=&quot;1234&quot;&gt;
            &lt;time class=&quot;timestamp&quot;&gt;March 15, 2012&lt;/time&gt;
            &lt;a data-id=&quot;1234&quot;
              data-analytics-category=&quot;[value]&quot;
              data-analytics-action=&quot;[value]&quot;
              href=&quot;[url]&quot;&gt;[text]&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;[url]&quot;&gt;[text]&lt;/a&gt;
                    &lt;img src=&quot;[url]&quot; alt=&quot;[text]&quot;&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;[url]&quot;&gt;[text]&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;

            &lt;a class=&quot;link-complex&quot; href=&quot;[url]&quot;&gt;
                &lt;span class=&quot;link-complex__target&quot;&gt;[text]&lt;/span&gt;
                [text]
            &lt;/a&gt;

            &lt;input value=&quot;text&quot; readonly&gt;
        &lt;/article&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

  <p class="paragraph">
    <i>Это перевод <a href="https://github.com/necolas/idiomatic-html">Principles of writing consistent, idiomatic HTML</a> Николаса Галлахера. Оригинал лицензирован по <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>. Лицензия распространяется на все документы и переводы.</i>
  </p>
</article>
`;

module.exports = (context) => layout(context, renderPage(context));
