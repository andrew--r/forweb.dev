module.exports = () => `
<section class="digest-widget">
  <h2 class="heading heading--3">Дайджест Форвеба</h2>

  <p class="paragraph">
    Во&nbsp;фронтенде много хайпа и&nbsp;информационного шума. Соцсети и&nbsp;медиа перегружают нас информацией и&nbsp;вызывают <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC_%D1%83%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D1%8B">синдром упущенной выгоды</a>.
  </p>

  <p class="paragraph">
    Дайджест Форвеба помогает бороться с&nbsp;этим: выходит раз в&nbsp;две недели и&nbsp;содержит только стоящие внимания события и&nbsp;материалы для фронтендеров.
  </p>

  <form
    class="form"
    method="POST"
    action="https://cp.unisender.com/ru/subscribe?hash=6qrafxfokaqm31371iubwsi9bqh45xy3ci8e4ucgzuucrtq18o1oy"
    name="subscribtion_form"
    target="_blank"
  >
    <div class="form__row form__row--inline">
      <input class="input" type="email" name="email" placeholder="Эл. почта" required />
      <input type="hidden" name="charset" value="UTF-8">
      <input type="hidden" name="default_list_id" value="17817541">
      <input type="hidden" name="overwrite" value="2">
      <input type="hidden" name="is_v5" value="1">

      <button class="button" type="submit">
        Подписаться
      </button>
    </div>
  </form>
</section>
`;
