import React from 'react';
import { Document } from '../../components/document';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Button } from '../../components/button';

export default function() {
  return (
    <Document>
      <div className="page__header">
        <Header />
      </div>

      <main className="page__content">
        <h2 className="heading heading--1">Дайджест новостей</h2>

        <p className="paragraph paragraph--lead">
          Всё, что нужно, чтобы оставаться в&nbsp;курсе: свежие подкасты,
          новости фронтенда, обзор новых статей и&nbsp;инструментов,
          рекомендации книг и&nbsp;других материалов.
        </p>

        <form
          className="form"
          action="https://forwebdev.us19.list-manage.com/subscribe/post?u=1e420147ab39ab295d24b7876&amp;id=3308e73dc7"
          method="post"
          target="_blank"
          noValidate
        >
          <div className="form__row">
            <label className="label" htmlFor="email">
              Эл. почта *
            </label>

            <input className="input" type="email" name="EMAIL" id="email" />
            <div
              style={{ position: 'absolute', left: '-5000vw' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_1e420147ab39ab295d24b7876_3308e73dc7"
                tabIndex="-1"
                value=""
              />
            </div>
          </div>

          <div className="form__row">
            <Button type="submit" name="subscribe">
              Подписаться
            </Button>
          </div>
        </form>
      </main>

      <Footer className="page__footer" />
    </Document>
  );
}
