import React from 'react';
import { Document } from '../components/document';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function() {
  return (
    <Document>
      <div className="page__header">
        <Header />
      </div>

      <main className="page__content">
        <h2 className="heading heading--1">
          Годнота для&nbsp;фронтендеров и дизайнеров в&nbsp;
          <a className="link" href="https://t.me/forwebdev">
            Телеграме
          </a>
          ,{' '}
          <a className="link" href="https://vk.com/forwebdev">
            ВКонтакте
          </a>{' '}
          и&nbsp;
          <a className="link" href="https://twitter.com/forwebdev">
            Твитере
          </a>
        </h2>

        <p className="paragraph">Наши статьи и&nbsp;переводы:</p>

        <ul className="list">
          <li className="list__item">
            <a
              className="link"
              href="https://github.com/forwebdev/ui-developer-tips"
            >
              Советы для разработчика интерфейсов
            </a>
          </li>
          <li className="list__item">
            <a className="link" href="/blog/about-postcss">
              О&nbsp;PostCSS от его создателя: интервью с&nbsp;Андреем Ситником
            </a>
          </li>
          <li className="list__item">
            <a className="link" href="/blog/8-things-for-beginners">
              8 вещей, которые я хотел&nbsp;бы знать в&nbsp;начале карьеры
            </a>{' '}
            <sup>перевод</sup>
          </li>
          <li className="list__item">
            <a
              className="link"
              href="/blog/principles-for-writing-idiomatic-html"
            >
              Принципы написания однородного, идиоматического HTML
            </a>{' '}
            <sup>перевод</sup>
          </li>
        </ul>
      </main>

      <Footer className="page__footer" />
    </Document>
  );
}
