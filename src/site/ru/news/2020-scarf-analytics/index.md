---
layout: article
tags: [news]
date: 2020-07-10
author: andrey-romanov
title: "Scarf: слежка за пользователями, теперь и в NPM"
description: Scarf при каждой установке зависимостей собирает и отсылает на сторонние сервера данные о вас и о вашем проекте.
---
<p class="paragraph--lead">Проект <a href="https://about.scarf.sh">Scarf</a> позиционирует себя как Google Analytics для NPM-пакетов. Идея в том, что автор NPM-пакета добавляет Scarf в зависимости, а тот предоставляет отчёт о пользователях пакета: сколько их, какая у них операционная система, какие версии пакета они используют, в каких компаниях они работают.</p>

Если хоть одна из зависимостей вашего проекта использует Scarf, при каждой установке зависимостей Scarf будет собирать и отсылать на сторонние сервера данные о вас и о вашем проекте, вплоть до вашего IP-адреса (как утверждается, он используется для определения компании, в которой вы работаете).

Scarf был подключен в популярных пакетах вроде [react-table](https://github.com/tannerlinsley/react-table/pull/2012) (~380 000 загрузок в неделю), [redux-form](https://github.com/redux-form/redux-form/commit/263474e197524aa9599488ec62ae4ed82d0b1e0e#diff-b9cfc7f2cdf78a7f4b91a753d10865a2) (~370 000 загрузок в неделю), [final-form](https://github.com/final-form/final-form/pull/342) (~232 000 загрузок в неделю), [react-query](https://github.com/tannerlinsley/react-query/pull/281) (~50 000 загрузок в неделю), [angular-calendar](https://github.com/mattlewis92/angular-calendar/commit/0047d111c5c95f536ef47bd7b73d0b207f332c6b#diff-b9cfc7f2cdf78a7f4b91a753d10865a2) (~50 000 загрузок в неделю). К счастью, из всех перечисленных пакетов, кроме angular-calendar, Scarf уже удалён. На GitHub можно изучить полный [список зависимых от Scarf пакетов](https://github.com/scarf-sh/scarf-js/network/dependents?dependent_type=PACKAGE).

## Как отключить сбор данных?

### Средствами самого Scarf

Добавьте в `package.json` поле с настройками Scarf:

```json
{
  "scarfSettings": {
    "enabled": false
  }
}
```

Также можно задать переменную окружения:

```
export SCARF_ANALYTICS=false
```

### Сторонними средствами

Установите [специальную заглушку](https://gist.github.com/Kurzdor/bd5c18861b76eb34f068bf2ed7de903e), котора подменяет вредоносный пакет Scarf.

### Радикально: средствами пакетного менеджера

Устанавливайте пакеты с флагом `--ignore-scripts`, это обезопасит вас не только от Scarf, но и от любых других потенциально вредоносных скриптов, выполняющихся в postinstall-хуках пакетов. Увы, это может сломать некоторые зависимости, которые используют postinstall-хуки в служебных целях вроде компиляции под вашу ОС.
