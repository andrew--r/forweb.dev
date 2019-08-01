const layout = require('../../partials/layout/template');

const renderPage = () => `
<h1 class="heading heading--1">Тестовая страница</h1>

<section>
  <h2 class="heading heading--2">Типографика</h2>
  <p class="paragraph paragraph--lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse rem eveniet delectus! Doloribus laboriosam nam optio sequi tempore molestiae a eligendi repellendus vel facere veritatis deleniti rerum, in dolores.</p>

  <p class="heading heading--1">Первый уровень</p>
  <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
  <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>

  <p class="heading heading--2">Второй уровень</p>
  <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
  <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>

  <p class="heading heading--3">Третий уровень</p>
  <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
  <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
</section>

<section>
  <h2 class="heading heading--2">Формы</h2>

  <form action="" class="form">
    <div class="form__row">
      <label class="label" for="login">Логин</label>
      <input class="input" id="login" type="text" required />
    </div>

    <div class="form__row">
      <label class="label" for="password">Пароль</label>
      <input class="input" id="password" type="password" required />
    </div>

    <div class="form__row">
      <button class="button" type="submit">Войти</button>
    </div>
  </form>

  <form action="" class="form">
    <div class="form__row form__row--inline">
      <input class="input" required id="email" type="email" placeholder="Эл. почта" required />
      <button class="button" type="submit">Подписаться</button>
    </div>
  </form>
</section>
`;

module.exports = (context) => layout(context, renderPage(context));