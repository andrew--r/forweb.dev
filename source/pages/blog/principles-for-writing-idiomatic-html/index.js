import React from 'react';
import { Document } from '../../../components/document';
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';

export default function() {
  return (
    <Document title="Принципы написания однородного HTML">
      <div className="page__header">
        <Header />
      </div>

      <main className="page__content">
        <article>
          <h2 className="heading heading--1">
            Принципы написания однородного HTML
          </h2>

          <p className="paragraph paragraph--lead">
            Этот документ представляет собой общие рекомендации по стилю
            написания HTML-разметки. Данное руководство призывает к
            использованию общепринятых и устоявшихся подходов к написанию кода.
          </p>

          <p className="paragraph">
            Этот документ не закончен, и новые идеи всегда приветствуются.
            Пожалуйста, внесите свой вклад.
          </p>

          <h3 className="heading heading--2">1. Основные принципы</h3>

          <ul className="list">
            <li className="list__item">
              Весь код в любой базе исходников должен выглядеть так, будто его
              написал один человек, вне зависимости от реального количества
              разработчиков.
            </li>
            <li className="list__item">Строго следуйте принятому стилю.</li>
            <li className="list__item">
              Если вы сомневаетесь в том, какой стиль использовать, пользуйтесь
              общепринятыми и устоявшимися подходами.
            </li>
          </ul>

          <h3 className="heading heading--2">2. Пустое пространство</h3>
          <p className="paragraph">
            В вашей базе исходных кодов должен существовать лишь один стиль
            написания кода. Всегда согласованно используйте пустое пространство.
            Используйте пустое пространство для улучшения читаемости кода.
          </p>

          <ul className="list">
            <li className="list__item">
              Никогда не смешивайте табы и пробелы в отступах.
            </li>
            <li className="list__item">
              Выберите между мягкой табуляцией (пробелы) и реальными табами.
              Придерживайтесь выбранного подхода. (Предпочтительно: мягкая
              табуляция)
            </li>
            <li className="list__item">
              Если вы используете пробелы, выберите количество символов для
              отступа. (Предпочтительно: 4 пробела)
            </li>
          </ul>

          <p className="paragraph">
            Совет: настройте свой текстовый редактор так, чтобы он показывал
            непечатные символы. Это позволит вам устранить появление лишних
            пробелов и табов в конце строк или ещё где-либо.
          </p>

          <h3 className="heading heading--2">3. Форматирование</h3>
          <ul className="list">
            <li className="list__item">
              Названия тегов и атрибутов всегда пишите в нижнем регистре.
            </li>
            <li className="list__item">
              На одной строке размещайте только один элемент.
            </li>
            <li className="list__item">
              Используйте дополнительный уровень отступов для каждого вложенного
              элемента.
            </li>
            <li className="list__item">
              Указывайте атрибуты без их значения, если это возможно (например{' '}
              <code>checked</code> вместо{' '}
              <code>checked="checked"</code>
              ).
            </li>
            <li className="list__item">
              Всегда используйте двойные кавычки для значений атрибутов.
            </li>
            <li className="list__item">
              Не указывайте атрибут{' '}
              <code>type</code> в элементах{' '}
              <code>link</code>, <code>style</code> и <code>script</code>.
            </li>
            <li className="list__item">Всегда закрывайте теги.</li>
            <li className="list__item">
              Не используйте слеш в единичных тегах (<code>{`<img>`}</code>
              &nbsp;— правильно,{' '}
              <code>{`<img/>`}</code>
              &nbsp;— неправильно).
            </li>
          </ul>

          <p className="paragraph">
            (Сохраняйте длину строки в пределах разумного максимума, например 80
            символов.)
          </p>

          <p className="paragraph">Пример:</p>

          <pre>
            <code>
              {`<div class="tweet">
    <a href="path/to/somewhere">
        <img src="path/to/image.png" alt="">
    </a>
    <p>[tweet text]</p>
    <button disabled>Reply</button>
</div>`}
            </code>
          </pre>

          <h4 className="heading heading--3">
            Исключения и небольшие допущения
          </h4>

          <p className="paragraph">
            В элементах с несколькими атрибутами эти атрибуты можно расположить
            на отдельных строках, чтобы улучшить читабельность:
          </p>

          <pre>
            <code>
              {`<a class="[value]"
 data-action="[value]"
 data-id="[value]"
 href="[url]">
    <span>[text]</span>
</a>`}
            </code>
          </pre>

          <h3 className="heading heading--2">4. Порядок атрибутов</h3>

          <p className="paragraph">
            HTML-атрибуты должны быть перечислены в порядке, учитывающем то, что
            названия классов&nbsp;— базовая вещь, которая позволяет выбирать
            элементы с помощью JavaScript или CSS:
          </p>

          <ol className="list">
            <li className="list__item">
              <code>class</code>
            </li>
            <li className="list__item">
              <code>id</code>
            </li>
            <li className="list__item">
              <code>data-*</code>
            </li>
            <li className="list__item">Любые другие атрибуты</li>
          </ol>

          <p className="paragraph">Пример:</p>

          <pre>
            <code>
              {`<a class="[value]" id="[value]" data-name="[value]" href="[url]">[text]</a>`}
            </code>
          </pre>

          <h3 className="heading heading--2">5. Именование</h3>

          <p className="paragraph">
            Именование&nbsp;— вещь сложная, но очень важная. Это ключевая часть
            процесса написания поддерживаемого кода. Без правильного именования
            невозможно иметь относительно масштабируемый интерфейс между HTML и
            CSS/JS.
          </p>

          <ul className="list">
            <li className="list__item">
              Используйте простые, понятные и уместные имена для классов. Имена
              должны быть информативны вне зависимости от контекста &nbsp;— как
              в разметке, так и в CSS-файлах.
            </li>
            <li className="list__item">
              Избегайте систематического сокращения имён классов. Не усложняйте
              код.
            </li>
          </ul>

          <p className="paragraph">Пример с плохим именованием классов:</p>

          <pre>
            <code>{`<div class="cb s-scr"></div>`}</code>
          </pre>

          <pre>
            <code>
              {`.s-scr {
  overflow: auto;
}

.cb {
  background: #000;
}`}
            </code>
          </pre>

          <p className="paragraph">Хороший пример именования:</p>

          <pre>
            <code>{`<div class="column-body is-scrollable"></div>`}</code>
          </pre>

          <pre>
            <code>
              {`.is-scrollable {
    overflow: auto;
}

.column-body {
    background: #000;
}`}
            </code>
          </pre>

          <h3 className="heading heading--2">6. Практический пример</h3>

          <p className="paragraph">Пример различных соглашений.</p>

          <pre>
            <code>
              {`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <link rel="stylesheet" href="main.css">
        <script src="main.js"></script>
    </head>
    <body>
        <article class="post" id="1234">
            <time class="timestamp">March 15, 2012</time>
            <a data-id="1234"
             data-analytics-category="[value]"
             data-analytics-action="[value]"
             href="[url]">[text]</a>
            <ul>
                <li>
                    <a href="[url]">[text]</a>
                    <img src="[url]" alt="[text]">
                </li>
                <li>
                    <a href="[url]">[text]</a>
                </li>
            </ul>

            <a class="link-complex" href="[url]">
                <span class="link-complex__target">[text]</span>
                [text]
            </a>

            <input value="text" readonly>
        </article>
    </body>
</html>`}
            </code>
          </pre>

          <p className="paragraph">
            <i>
              Это перевод{' '}
              <a href="https://github.com/necolas/idiomatic-html">
                Principles of writing consistent, idiomatic HTML
              </a>{' '}
              Николаса Галлахера. Оригинал лицензирован по{' '}
              <a href="http://creativecommons.org/licenses/by/3.0/">
                Creative Commons Attribution 3.0 Unported License
              </a>
              . Лицензия распространяется на все документы и переводы.
            </i>
          </p>
        </article>
      </main>

      <Footer className="page__footer" />
    </Document>
  );
}
