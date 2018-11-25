const layout = require('../../partials/layout/template');

const renderPage = () => `
<h2 class="heading heading--1">Дайджест Форвеба</h2>

<p class="paragraph paragraph--lead">
  Новости фронтенда без шума
</p>

<p class="paragraph">
  Во фронтенде много хайпа и информационного шума. Соцсети и&nbsp;медиа перегружают нас информацией и&nbsp;вызывают <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC_%D1%83%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D1%8B">синдром упущенной выгоды</a>. Дайджест Форвеба помогает бороться с этим: выходит раз в&nbsp;две недели и&nbsp;содержит только стоящие внимания события и&nbsp;материалы.
</p>

<form
  class="form"
  action="https://forwebdev.us19.list-manage.com/subscribe/post?u=1e420147ab39ab295d24b7876&amp;id=3308e73dc7"
  method="post"
  target="_blank"
  noValidate
>
  <div class="form__row">
    <label class="label" htmlFor="email">
      Эл. почта *
    </label>

    <input class="input" type="email" name="EMAIL" id="email" />
    <div
      style="position: absolute; left: -5000vw;"
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

  <div class="form__row">
    <button type="submit" name="subscribe">
      Подписаться
    </button>
  </div>
</form>
`;

module.exports = (context) => layout(context, renderPage(context));
