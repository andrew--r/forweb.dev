const layout = require('../../../partials/layout/template');

const renderPage = () => `
<article>
  <h2 class="heading heading--1">О&nbsp;PostCSS от его создателя: интервью с&nbsp;Андреем Ситником</h2>

  <p class="paragraph paragraph--lead">
    В&nbsp;последнее время сообществом фронтенд-разработчиков довольно активно обсуждается PostCSS. О&nbsp;том, что это и&nbsp;где оно применяется мы&nbsp;расспросили создателя PostCSS <a href="http://sitnik.ru/">Андрея Ситника</a>.
  </p>

  <div class="chat">
    <p class="paragraph chat__message chat__message--out">
      Привет! Спасибо, что согласился побеседовать. Я&nbsp;думаю, разговор всё равно более-менее спонтанный получится, так что начну с&nbsp;одного вопроса, а&nbsp;дальше уже как пойдёт. Расскажи немного о&nbsp;себе?
    </p>

    <p class="paragraph chat__message chat__message--in">
      Родился во&nbsp;Владивостоке. Детство прожил в&nbsp;Йемене. Университет закончил в&nbsp;Питере. Сейчас работаю фронтендером над Амплифером в&nbsp;Злых марсианах, поддерживаю Автопрефиксер и&nbsp;развиваю PostCSS.
    </p>

    <p class="paragraph chat__message chat__message--out">
      А&nbsp;как ты&nbsp;вообще стал программистом? Когда и&nbsp;с&nbsp;чего начал увлекаться этим? Какой путь совершил прежде чем прийти к&nbsp;фронтенду?
    </p>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        В&nbsp;детстве я&nbsp;не&nbsp;хотел быть программистом&nbsp;&mdash; скорее хотел стать учёным. Но&nbsp;у&nbsp;меня была большая мечта&nbsp;&mdash; путешествовать по&nbsp;миру. И&nbsp;я&nbsp;подумал, что программирование&nbsp;&mdash; самый простой путь к&nbsp;этому. А&nbsp;потом я&nbsp;написал свою первую программу, запустил её&nbsp;и&nbsp;увидел, что она заработала. Это было непередаваемое ощущение&nbsp;&mdash; когда что-то, что ты&nbsp;сделал, живёт дальше само по&nbsp;себе.
      </p>
      <p class="paragraph">
        Дальше был Basic, Pascal, школьные олимпиады. Затем я&nbsp;увидел мир PHP и&nbsp;веба&nbsp;&mdash; он&nbsp;мне сразу очень понравился. Там была настоящая свобода. Динамический язык для творчества. И&nbsp;результат доступный каждому. А&nbsp;потом я&nbsp;впервые увидел Ruby on&nbsp;Rails. Видео &laquo;блог за&nbsp;5&nbsp;минут&raquo; просто будоражило, так как оно показывало, что появляется совершенно новая эпоха.
      </p>
      <p>
        Я&nbsp;бы не&nbsp;сказал, что я&nbsp;стремился во&nbsp;фронтенд. Просто мне было проще решать задачи с&nbsp;визуальной точки зрения. Проще понять дизайн. Так со&nbsp;временем становилось всё больше фронтенда и&nbsp;меньше бэкенда.
      </p>
    </div>

    <p class="paragraph chat__message chat__message--out">
      Получается, ты&nbsp;изначально немного занимался бэкендом, писал на&nbsp;PHP и&nbsp;Ruby? Насчёт PHP ничего не&nbsp;скажу, но&nbsp;вот Ruby весьма выразительный и&nbsp;красивый язык. Не&nbsp;жалеешь о&nbsp;переходе на&nbsp;JavaScript после него?
    </p>

    <p class="paragraph chat__message chat__message--in">
      Скажем так, на&nbsp;чистом&nbsp;JS я&nbsp;бы вообще не&nbsp;смог программировать&nbsp;&mdash; но&nbsp;CoffeeScript, ES6 сильно развивают язык до&nbsp;какого-то приемлемого уровня. Многих вещей мне всё ещё не&nbsp;хватает, но&nbsp;уже терпимо.
    </p>

    <p class="paragraph chat__message chat__message--out">
      JavaScript по&nbsp;сравнению с&nbsp;CSS развивается довольно быстро. Если с&nbsp;появлением ES6&nbsp;в языке появилось достаточно нововведений, благодаря которым можно обойтись без дополнительных инструментов вроде CoffeeScript, то&nbsp;в&nbsp;случае CSS использование различных препроцессоров уже стало стандартом де-факто. Раньше ты&nbsp;использовал какой-то препроцессор?
    </p>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        Ты&nbsp;так говоришь, как будто ES6 поддерживается во&nbsp;всех браузерах. Мы&nbsp;просто сменили один препроцессор, CoffeeScript, на&nbsp;следующий&nbsp;&mdash; Babel. Даже когда браузеры будут поддерживать ES6&nbsp;мы всё равно будем использовать Babel ради ES7 и&nbsp;так далее. Но&nbsp;в&nbsp;сравнении с&nbsp;этим мне действительно не&nbsp;нравится застой в&nbsp;мире препроцессоров CSS&nbsp;&mdash; за&nbsp;последний год в&nbsp;Sass, Less, Stylus ничего не&nbsp;изменилось, и&nbsp;это приговор.
      </p>
      <p class="paragraph">
        Раньше я&nbsp;использовал Sass, так как я&nbsp;из&nbsp;мира Ruby.
      </p>
    </div>

    <div class="chat__message chat__message--out">
      <p class="paragraph">
        Я&nbsp;раньше тоже использовал Ruby Sass, но&nbsp;он&nbsp;ооочень медленный.
      </p>
      <p class="paragraph">
        В&nbsp;мире Sass/Less/Stylus действительно практически ничего не&nbsp;изменилось за&nbsp;последнее время. Хотя свои задачи они решают неплохо. Но&nbsp;стабильность без всякого развития губительна.
      </p>
      <p class="paragraph">
        Зато в&nbsp;мире CSS появились такие инструменты как Rework, а&nbsp;затем PostCSS. Можешь для непросвещённых читателей вкратце рассказать, что это за&nbsp;инструмент такой&nbsp;&mdash; PostCSS, а&nbsp;главное, зачем он&nbsp;нужен?
      </p>
    </div>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        Технически <a href="https://github.com/postcss/postcss">PostCSS</a>&nbsp;&mdash; это инструмент, который позволяет его JS-плагинам перестраивать CSS-файл. Но&nbsp;в&nbsp;реальности этот инструмент позволяет нам совсем по&nbsp;другому подойти к&nbsp;написанию CSS. На&nbsp;PostCSS можно написать совершенно новые инструменты, которые будут помогать писать CSS-код. Инструменты, о&nbsp;которых мы&nbsp;даже раньше и&nbsp;не&nbsp;думали. Речь идёт не&nbsp;о&nbsp;переменных или примесях&nbsp;&mdash; PostCSS это следующий этап, где эти вещи уже не&nbsp;так важны.
      </p>
      <p class="paragraph">
        Например, <a href="https://github.com/postcss/autoprefixer">Автопрефиксер</a>&nbsp;&mdash; он&nbsp;сам расставляет префиксы только там, где вам нужно. Не&nbsp;нужно писать примеси и&nbsp;тому подобное&nbsp;&mdash; он&nbsp;работает с&nbsp;обычным CSS. Или <a href="http://cssnext.io/">cssnext</a>, который откомпилирует CSS4&nbsp;в обычный CSS (как Babel для ES6). Или <a href="https://github.com/luisrudge/postcss-flexbugs-fixes">postcss-flexbugs-fixes</a>&nbsp;&mdash; он&nbsp;содержит в&nbsp;себе базу данных ошибок реализации флексбокса в&nbsp;браузерах. И&nbsp;он&nbsp;автоматически исправляет или предупреждает вас, когда код будет не&nbsp;работать из-за этих ошибок.
      </p>
    </div>

    <p class="paragraph chat__message chat__message--out">
      То&nbsp;есть по&nbsp;сути PostCSS получает написанный нами CSS (возможно невалидный), производит с&nbsp;ним определённые манипуляции, как-то его модифицирует и&nbsp;отдаёт нам уже преобразованный, валидный CSS?
    </p>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        Да. Например, плагин <a href="https://github.com/postcss/postcss-nested">postcss-nested</a> в&nbsp;60&nbsp;строк просто проходиться по&nbsp;CSS и&nbsp;заменяет <code>a { b { } }</code> на <code>a b {}</code>. Но&nbsp;PostCSS не&nbsp;только про трансформацию CSS.
      </p>
      <p class="paragraph">
        Например, Твиттер использует PostCSS, чтобы <a href="https://github.com/postcss/postcss-bem-linter">проверять БЭМ-нотацию</a>. Или плагин <a href="https://github.com/anandthakker/doiuse">doiuse</a>,который проверяет по&nbsp;Can I&nbsp;Use все&nbsp;ли используемые свойства поддерживаются в&nbsp;нужных вам браузерах. Ну&nbsp;и&nbsp;недавно анонсированный <a href="https://github.com/stylelint/stylelint">stylelint</a>&nbsp;&mdash; очень умный CSS-линтер, построенный по&nbsp;модульный архитектуре, как ESLint.
      </p>
    </div>

    <p class="paragraph chat__message chat__message--out">
      Интересно. Ты&nbsp;упомянул Твиттер. На&nbsp;страничке PostCSS на&nbsp;гитхабе сказано, что PostCSS также используют Google, Alibaba и&nbsp;Shopify. А&nbsp;можно об&nbsp;этом подробнее? Какие задачи они решают с&nbsp;помощью PostCSS?
    </p>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        Shopify использует Автопрефиксер. Google использует Автопрефиксер и&nbsp;рекомендует его как единственный инструмент для работы с&nbsp;браузерными префиксами. Точный список плагинов у&nbsp;Alibaba не&nbsp;знаю, но&nbsp;они разрабатывают <a href="https://github.com/cssdream/cssgrace">cssgrace</a> и&nbsp;несколько плагинов для cssnext. Так что точно используют эти два. В&nbsp;Китае просто большая проблема с&nbsp;IE&nbsp;&mdash; там до&nbsp;сих пор популярные версии 8, 7&nbsp;и&nbsp;даже иногда 6. Поэтому cssgrace&nbsp;&mdash; это такой cssnext наоборот. Он&nbsp;находит вещи, которые не&nbsp;поддерживаются в&nbsp;старом&nbsp;IE и&nbsp;вставляет хаки для него.
      </p>
      <p class="paragraph">
        Твиттер пошли дальше&nbsp;&mdash; они совсем отказались от&nbsp;препроцессоров. Когда я&nbsp;последний раз говорил с&nbsp;<a href="https://github.com/necolas">Николасом</a>, он&nbsp;сказал, что они сейчас на&nbsp;Rework и&nbsp;переходят на&nbsp;PostCSS.
      </p>
    </div>

    <div class="chat__message chat__message--out">
      <p class="paragraph">
        А&nbsp;ещё я&nbsp;слышал, что bootstrap&nbsp;5, вероятно, <a href="https://twitter.com/mdo/status/591364406816079873">будет переписан на&nbsp;PostCSS</a>. Это похоже прямо-таки на&nbsp;революцию в&nbsp;мире CSS.
      </p>
      <p class="paragraph">
        Опыт твиттера весьма любопытен. Многие разработчики боятся полностью переходить на&nbsp;PostCSS. Они в&nbsp;лучшем случае используют какой-нибудь препроцессор вместе с&nbsp;Автопрефиксером. Можно&nbsp;ли уже сейчас полностью отказаться от&nbsp;препроцессоров и&nbsp;продолжить решать те&nbsp;же задачи, но&nbsp;уже с&nbsp;PostCSS? Или он&nbsp;всё&nbsp;же не&nbsp;рассчитан на&nbsp;то, чтобы полностью заменить препроцессоры?
      </p>
    </div>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        PostCSS сразу создавался чтобы заменить препроцессоры. Если мы&nbsp;можем делать такие сложные вещи, как Автопрефиксер или cssnext, то&nbsp;сделать вложенность или переменные очень легко. Как раз на&nbsp;этой неделе вышел <a href="https://github.com/jonathantneal/precss">PreCSS</a>&nbsp;&mdash; набор плагинов для PostCSS, чтобы сделать что-то типа препроцессора.
      </p>
      <p class="paragraph">
        Но&nbsp;тут есть важный нюанс. Если ваш проект уже написан на&nbsp;Sass&nbsp;&mdash; не&nbsp;переводите его на&nbsp;PreCSS, добавьте PostCSS после Sass. Дело в&nbsp;том, стагнация Sass длилась очень долго. В&nbsp;итоге у&nbsp;нас есть очень много не&nbsp;очень правильных способов организации код. Я&nbsp;видел как на&nbsp;Sass писали прямо целые программы&nbsp;&mdash; и&nbsp;это, конечно&nbsp;же, плохой подход. Это как делать SQL-запросы в&nbsp;шаблонах&nbsp;&mdash; сильное смешивание кода. Поэтому в&nbsp;PostCSS мы&nbsp;немного меняем философию. Ваши стили должны быть простыми. @for нужно использовать просто&nbsp;&mdash; чтобы не&nbsp;повторять одинаковые блоки, а&nbsp;не&nbsp;чтобы писать алгоритмы. Если вам нужна сложная логика&nbsp;&mdash; лучше всего её&nbsp;вынести в&nbsp;JS. И&nbsp;когда старый проект переписывается с&nbsp;Sass на&nbsp;PostCSS&nbsp;&mdash; это не&nbsp;просто вопрос смены синтаксиса, но&nbsp;скорее вопрос смены мышления. Лучше всего попробовать только PostCSS без препроцессоров на&nbsp;новом проекте&nbsp;&mdash; там вам буде легче понять философию PostCSS.
      </p>
    </div>

    <p class="paragraph chat__message chat__message--out">
      Расскажи, как вообще тебе в&nbsp;голову пришла идея создать PostCSS? Была необходимость решить какую-то задачу, которую не&nbsp;могли решить препроцессоры?
    </p>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        Всё началось из-за ненависти. Ненависти к&nbsp;Compass. У&nbsp;них было ужасное управление проектом&nbsp;&mdash; ты&nbsp;посылаешь&nbsp;PR, а&nbsp;они молчат по&nbsp;месяцам. Последней каплей было, когда моя знакомая закрыла&nbsp;ИП в&nbsp;российской бюрократии проще и&nbsp;быстрее, чем Compass принял мой&nbsp;PR.
      </p>
      <p class="paragraph">
        Я&nbsp;понял, что Compass надо заменять. И&nbsp;главной вещью в&nbsp;Compass были префиксы. Я&nbsp;начал думать&nbsp;&mdash; как можно сделать управление префиксами ещё удобнее чем сейчас. Всё по&nbsp;ТРИЗ&nbsp;&mdash; как можно было&nbsp;бы управлять ими вообще идеально. И&nbsp;пришёл к&nbsp;идее Автопрефиксера, который сразу вырисовывался как проект, невозможный на&nbsp;препроцессорах.
      </p>
      <p class="paragraph">
        Но&nbsp;полностью идею модульных процессоров придумал TJ&nbsp;Holowaychuk в&nbsp;проекте Rework. Первая версия Автопрефиксера даже называлась rework-vendors. Однако очень быстро Автопрефиксер перерос Rework: нам требовался парсер лучше, лучше поддержка карт кода. Ребята из&nbsp;Rework не&nbsp;хотели менять архитектуру. Так что я&nbsp;начал PostCSS как развитие идей Rework.
      </p>
    </div>

    <p class="paragraph chat__message chat__message--out">
      Теперь ты&nbsp;полностью отказался от&nbsp;препроцессоров и&nbsp;на&nbsp;работе используешь только PostCSS?
    </p>

    <p class="paragraph chat__message chat__message--in">
      Да. Но&nbsp;мне от&nbsp;препроцессоров было нужно весьма мало: вложенность, какой-то простой конфиг с&nbsp;цветами сайта, простейшие циклы и&nbsp;примеси, чтобы не&nbsp;повторять код. Единственное чего не&nbsp;хватает из&nbsp;препроцессоров&nbsp;&mdash; простого синтаксиса типа Stylus. Но&nbsp;мы&nbsp;работаем над этим. В&nbsp;PostCSS 4.2 будут разные парсеры.
    </p>

    <p class="paragraph chat__message chat__message--out">
      О, вот это действительно круто. А&nbsp;как решать вопрос с&nbsp;подсветкой синтаксиса? Ведь, насколько мне известно, нет никаких цветовых схем, заточенных конкретно под PostCSS. Да&nbsp;и&nbsp;обилие разных плагинов усложняет эту задачу.
    </p>

    <p class="paragraph chat__message chat__message--in">
      Плагины никакой проблемы не&nbsp;создают&nbsp;&mdash; они&nbsp;же не&nbsp;вводят новые синтаксические конструкции. Только новые свойства или @директивы. Сейчас SCSS-подсветка прекрасно работает с&nbsp;PostCSS&nbsp;&mdash; собственно PostCSS&nbsp;же работает с&nbsp;обычным CSS, только с&nbsp;возможностью вложенности.
    </p>

    <p class="paragraph chat__message chat__message--out">
      В&nbsp;нашем <a href="http://vk.com/forwebdev">сообществе</a> в&nbsp;комментариях к&nbsp;одному из&nbsp;постов сказали, что было&nbsp;бы разумно ввести какое-нибудь специальное расширение для файлов стилей, написанных для PostCSS&nbsp;&mdash; ну&nbsp;чтобы хотя&nbsp;бы никакой путаницы не&nbsp;возникало. Что-то вроде main.pcss. Ты&nbsp;задумывался об&nbsp;этом?
    </p>

    <p class="paragraph chat__message chat__message--in">
      У&nbsp;нас точно будет специальное расширение для сокращённого синтаксиса&nbsp;&mdash; SugarSS.
    </p>

    <p class="paragraph chat__message chat__message--out">
      А&nbsp;как быть с&nbsp;обычным синтаксисом?
    </p>

    <p class="paragraph chat__message chat__message--in">
      Пока не&nbsp;решили :). Некоторые плагины типа Автопрефиксера, cssnext или postcss-focus ничего в&nbsp;CSS не&nbsp;добавляют, им&nbsp;расширение не&nbsp;нужно. Может быть внутри проекта PreCSS придумают какое-о расширение.
    </p>

    <p class="paragraph chat__message chat__message--out">
      PostCSS называют постпроцессором. А&nbsp;чем постпроцессор отличается от&nbsp;препроцессора? Откуда вообще взялся этот термин?
    </p>

    <p class="paragraph chat__message chat__message--in">
      Я&nbsp;сам не&nbsp;знаю откуда он&nbsp;взялся. Сейчас он&nbsp;уже потерял свой смысл&nbsp;&mdash; грань слишком стёрлась. Изначально постпроцессорами называли плагины PostCSS, которые работают с&nbsp;обычным CSS&nbsp;&mdash; например, Автопрефиксер, полифиллы будущих стандартов. Но&nbsp;для PostCSS есть набор плагинов PreCSS, который работает полностью как препроцессор. Я&nbsp;стараюсь уже не&nbsp;употреблять термин постпроцессоры :).
    </p>

    <p class="paragraph chat__message chat__message--out">
      Раз сам создатель рекомендует не&nbsp;использовать этот термин, то&nbsp;грех теперь его произносить :). И, наверное, последний вопрос&nbsp;&mdash; сколько человек на&nbsp;данный момент работает над PostCSS и&nbsp;какие у&nbsp;вас планы на&nbsp;будущее?
    </p>

    <div class="chat__message chat__message--in">
      <p class="paragraph">
        Поскольку у&nbsp;нас модульный проект, то&nbsp;нельзя сказать о&nbsp;какой-то явной команде. Скорее это такое переплетение важных модулей.
      </p>
      <p class="paragraph">
        Над ядром PostCSS работаю в&nbsp;основном&nbsp;я, хотя все остальные активно помогают мне с&nbsp;английским. Maxime Thirouin из&nbsp;Франции разрабатывает cssnext и&nbsp;stylelint и&nbsp;активно участвует в&nbsp;сообществе. Ben Briggs из&nbsp;Англии ведёт разработку важных инфраструктурных плагинов типа postcss-use и&nbsp;помогает новичкам в&nbsp;<a href="https://gitter.im/postcss/postcss">gitter-чате</a>. Jonathan Neal из&nbsp;США разрабатывает PreCSS. 一丝 из&nbsp;Китая внедряет PostCSS в&nbsp;Таобао и&nbsp;другие проеты Алибабы и&nbsp;ответственен за&nbsp;пиар в&nbsp;Китае. David Clark из&nbsp;США занимается линтерами (Stylelint и&nbsp;postcss-bem-linter) и&nbsp;пишет отличные статьи, объясняющие PostCSS новичкам.
      </p>
      <p class="paragraph">
        Это самое явное ядро проекта, но&nbsp;так или иначе участвует примерно 90&nbsp;человек&nbsp;&mdash; кто-то пишет плагины, кто-то рассказывает про PostCSS. И&nbsp;жёсткой грани между &laquo;ядром&raquo; и&nbsp;остальными не&nbsp;существует.
      </p>
    </div>

    <p class="paragraph chat__message chat__message--out">
      Ого, неплохо. А&nbsp;что в&nbsp;планах?
    </p>

    <p class="paragraph chat__message chat__message--in">
      В&nbsp;версии 4.2 добавим сменяемые парсеры. Можно будет парсить SCSS, Less, и&nbsp;специальный синтаксис типа Stylus, где не&nbsp;надо будет вводить фигурные скобки ({}) и&nbsp;точки с&nbsp;запятыми (;). В&nbsp;версии 4.3 добавим больше API&nbsp;&mdash; парсер селекторов, парсер значений. А&nbsp;потом будет большой релиз 5.0, где мы&nbsp;исправим API, сделав его более логичным&nbsp;&mdash; всё-таки некоторые части проекта развивались стихийно. Ещё в&nbsp;планах сайт и&nbsp;маленький митапчик PostCSSConf где-нибудь в&nbsp;Европе.
    </p>

    <p class="paragraph chat__message chat__message--out">
      Класс! А&nbsp;в&nbsp;специальном синтаксисе типа Stylus двоеточия останутся или нет?
    </p>

    <p class="paragraph chat__message chat__message--in">
      Пока ещё не&nbsp;решили. Хочется сохранить возможность писать многострочные значения (например для длинных градиентов).
    </p>

    <p class="paragraph chat__message chat__message--out">
      Было&nbsp;бы круто реализовать лаконичный синтаксис из&nbsp;Stylus без двоеточий. Будем ждать новостей. Спасибо за&nbsp;беседу! Интересно было пообщаться. Желаем успехов тебе и&nbsp;твоему проекту!
    </p>
  </div>
</article>
`;

module.exports = (context) => layout(context, renderPage(context));
