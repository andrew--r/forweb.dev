import React from 'react';
import { Document } from '../components/document';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Link } from '../components/link';

export default function() {
  return (
    <Document>
      <div className="page__header">
        <Header />
      </div>

      <main className="page__content">
        <h2 className="heading heading--1">
          Годнота для&nbsp;фронтендеров и дизайнеров в&nbsp;
          <Link href="https://t.me/forwebdev">Телеграме</Link>,{' '}
          <Link href="https://vk.com/forwebdev">ВКонтакте</Link> и&nbsp;
          <Link href="https://twitter.com/forwebdev">Твитере</Link>
        </h2>

        <p className="paragraph">Наши статьи и&nbsp;переводы:</p>

        <ul className="list">
          <li className="list__item">
            <Link href="https://github.com/forwebdev/ui-developer-tips">
              Советы для разработчика интерфейсов
            </Link>
          </li>
          <li className="list__item">
            <Link href="/blog/about-postcss">
              О&nbsp;PostCSS от его создателя: интервью с&nbsp;Андреем Ситником
            </Link>
          </li>
          <li className="list__item">
            <Link href="/blog/8-things-for-beginners">
              8 вещей, которые я хотел&nbsp;бы знать в&nbsp;начале карьеры
            </Link>{' '}
            <sup>перевод</sup>
          </li>
          <li className="list__item">
            <Link href="/blog/principles-for-writing-idiomatic-html">
              Принципы написания однородного, идиоматического HTML
            </Link>{' '}
            <sup>перевод</sup>
          </li>
        </ul>
      </main>

      <Footer className="page__footer" />
    </Document>
  );
}
