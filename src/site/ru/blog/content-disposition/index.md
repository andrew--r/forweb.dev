---
layout: article
tags: [articles, ru]
date: 2020-07-06
author: andrey-romanov
title: "Скачать или показать: заголовок Content-Disposition"
description: Подсказываем браузеру, что делать с открытым по ссылке файлом
og:
  image:
    url: social.jpg
    height: 837
    width: 1069
---
Открытие файла по прямой ссылке может привести либо к отображению файла прямо в браузере, либо к его скачиванию. Контролируется это поведение очень просто — HTTP-заголовком [`Content-Disposition`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) в ответе сервера.

Если нужно отобразить файл прямо в браузере (если отображение не поддерживается, браузер скачает файл):

```
Content-Disposition: inline
```

Если нужно сразу скачивать файл (дополнительно можно указать имя файла в параметре `filename`):

```
Content-Disposition: attachment
Content-Disposition: attachment; filename="kitten.jpg"
```

Будьте внимательны: если вы используете `Content-Disposition: inline` для видео, ваш сервер должен поддерживать HTTP-запросы с [байтовыми диапазонами](https://en.wikipedia.org/wiki/Byte_serving), иначе видео [не будет воспроизводиться в Safari](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/CreatingVideoforSafarioniPhone/CreatingVideoforSafarioniPhone.html#//apple_ref/doc/uid/TP40006514-SW6), а скачать его оттуда же не получится.
