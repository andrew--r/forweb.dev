---
layout: article
tags: [articles, ru]
date: 2022-01-16
author: jack-franklin
translators: [andrey-romanov]
title: Почему стоит хранить зависимости в системе контроля версий
description: Джек Франклин из команды Chrome DevTools делится неочевидными преимуществами хранения зависимостей в git
og:
  image:
    url: social.png
    height: 801
    width: 1286
---
<p class="paragraph--lead">Везде, где я раньше работал, было простое правило: не храните <code>node_modules</code> в системе контроля версий (в этой статье я буду для краткости называть её git).</p>

Это правило выглядело разумным по нескольким причинам:

* Код из `node_modules` не пишется командой.
* Код из `node_modules` вызвал бы много шума в диффах git и пулреквестах.
* Код из `node_modules` может быть легко воспроизведён через npm install.

Сейчас я работаю в Google в команде Chrome DevTools, и мы храним `node_modules` в системе контроля версий. Поначалу это показалось мне необычным, но со временем я обнаружил существенные преимущества такого подхода, которые, по моему мнению, достойны рассмотрения.

## Нет нужды в `npm install`

Если вы храните `node_modules` в git, вам не нужно отдельно устанавливать зависимости, чтобы запустить проект. Это полезно не только для локальной разработки, но и для ботов на <abbr title='Continuous integration, непрерывная интеграция'>CI</abbr>-платформах: они могут полностью пропустить шаг установки зависимостей. Я видел проекты, в которых установка зависимостей с нуля занимала 1–2 минуты — а в CI это могло быть ещё дольше. У вас легко может быть 50+ запусков ботов каждый день, если они запускаются на каждый пулреквест и деплой. Это большая экономия времени (и трафика!).

## Гарантированно воспроизводимые сборки

Хранение `node_modules` в git гарантирует, что два разработчика запускают один и тот же код с одним и тем же набором зависимостей. Да, этого можно добиться, используя локфайлы или другие инструменты, однако я встречал случаи, когда они не спасали от изменения минорной версии какой-либо зависимости. Когда зависимости лежат в git, невозможно запустить проект с чем-то другим, каждый разработчик будет работать с одним и тем же кодом.

## Лучшая осведомлённость о поставляемом коде

Я был удивлён тем, насколько я стал осведомлённее касательно зависимостей, когда стал видеть в диффе git весь код, попадающий в проект при их подключении. Это побудило нас поработать над инструментами, помогающими оценить влияние зависимостей на размер бандла и оптимизировать занимаемое на диске место.

## Более вдумчивое добавление зависимостей, потому что они больше не скрыты

Я уже упоминал, что шум в диффах воспринимается людьми как недостаток хранения зависимостей в git, и я признаю, что это действительно может быть проблемой. Однако для меня этот шум оказался полезным знаком. Раньше я часто подключал новые зависимости, просто потому что не хотел сам писать несколько строчек кода. Теперь же я гораздо внимательнее отношусь к добавлению новых зависимостей, потому что я могу увидеть добавленный ими код и решить, стоит ли он того.

Примечание: это не означает, что у нас нет зависимостей! Бывают ситуации, когда подключить зависимость выгодно, но видимость кода в системе контроля версий сделала меня более осознанным — цена добавления зависимостей больше не скрыта.

## C большими диффами можно справиться

Нельзя игнорировать тот факт, что добавление или обновление зависимостей может вызвать много шума в диффе. Одна из наших зависимостей — TypeScript, и каждое его обновление приносит огромный дифф в git, который, честно говоря, не стоит просмотра (за пределами CHANGELOG). Мы пришли к правилу, которое помогает в таких ситуациях: изменения в `node_modules` должны быть отделены от любых изменений в основной кодовой базе. Так что если я обновлю `node_modules/typescript` до свежей версии, наш инструментарий предупредит меня при обнаружении изменений за пределами `node_modules`.

Это правило помогает нам в большинстве случаев, потому что любая задача, требующая добавления или обновления зависимостей, может быть разделена на две части:

1. Обновление или добавление зависимости
1. Использование зависимости в коде

Иногда это не работает: например, обновление TypeScript может потребовать от нас исправления в коде ошибок, которые теперь обнаруживает новая версия TypeScript. В таких случаях мы отменяем правило.

> Как и во всём, что касается программной инженерии, большинство «правил» — это рекомендации, которые мы можем при необходимости обойти.

## Защита от очередного left_pad

Печально известный [инцидент с left_pad](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/) (популярный npm-пакет был внезапно удалён, ломая сборки проектов по всему миру) не затронул бы команду, которая хранит зависимости в git. В долгосрочной перспективе команде всё ещё пришлось бы разбираться с вопросом «что теперь делать с более не поддерживаемой зависимостью», но в краткосрочной перспективе их сборки бы не сломались, а релизы бы не были заблокированы.

## Выводы

Если бы я на этой неделе заводил новую кодовую базу или присоединялся к небольшому стартапу, только начинающему разработку, я бы настоял на хранении `node_modules` в системе контроля версий. Это определённо требует привыкания, но опыт применения этого подхода в течение последних двух лет убедил меня, что перечисленные выше преимущества существенно перевешивают дополнительный шум в git и небольшие накладные расходы.

---

Это перевод статьи Джека Франклина [Why you should check-in your node dependencies](https://www.jackfranklin.co.uk/blog/check-in-your-node-dependencies/). Переведено с разрешения автора.
