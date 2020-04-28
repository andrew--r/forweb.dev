---
layout: article
date: 2020-04-29
title: Состояние загружаемых данных
description: Как описывать в коде состояние загружаемых данных с помощью одного текстового поля вместо нескольких булевых переменных.
---

Одна из повседневных задач каждого фронтендера — загрузка данных с сервера. На время загрузки обычно требуется показывать пользователю спиннер, а в случае неудачи — сообщение об ошибке. В коде состояние загрузки часто описывают булевыми флагами:

```javascript
const comments = {
  isLoading: false,
  isLoaded: false,
  isError: false,
  errorText: '',
  data: [],
};
```

На первый взгляд такие флаги выглядят удобно. При их использовании код загрузки данных выглядит примерно так:

```javascript
const comments = {
  isLoading: false,
  isLoaded: false,
  isError: false,
  errorText: '',
  data: [],
};

function loadComments() {
  comments.isLoaded = false;
  comments.isError = false;
  comments.isLoading = true;

  fetch('/comments')
    .then((response) => response.json())
    .then((data) => {
      comments.isLoading = false;
      comments.isLoaded = true;
      comments.data = data;
    })
    .catch((error) => {
      commments.isLoading = false;
      comments.isError = true;
      comments.errorText = error.message;
    });
}
```

Получается запутанно и многословно. Нужно внимательно следить, значения каких флагов следует сбросить, иначе в вашем приложении появятся бессмысленные комбинации флагов вроде `isLoading: true` и `isLoaded: true`.

Более практичный подход, решающий эту проблему — описание состояния одним полем `dataState` и автоматическое вычисление флагов на основе значения этого поля:

```javascript
const dataStates = {
  notAsked: 'notAsked',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
};

const comments = {
  dataState: dataStates.notAsked,
  errorText: '',
  data: [],

  get isLoading() {
    return this.dataState === dataStates.loading;
  },

  get isLoaded() {
    return this.dataState === dataStates.loaded;
  },

  get isError() {
    return this.dataState === dataStates.failed;
  },
};
```

Кода стало чуть больше, зато значения всех флагов меняются автоматически, и вероятность ошибки из-за неправильного обновления одного из флагов сведена к нулю. Функция загрузки комментариев становится значительно проще:

```javascript
function loadComments() {
  comments.dataState = dataStates.loading;

  fetch('/comments')
    .then((response) => response.json())
    .then((data) => {
      comments.dataState = dataStates.loaded;
      comments.data = data;
    })
    .catch((error) => {
      comments.dataState = dataStates.failed;
      comments.errorText = error.message;
    });
}
```
