---
layout: article
tags: [articles, en]
date: 2020-05-10
author: andrey-romanov
translators: [stcherenkov]
title: Timing in JavaScript
description: Measurement of duration using Date.now may lead to unexpected results. Let’s see why and how to properly measure duration.
---
There are some tasks on the frontend that require time measurement, such as calculating the load time of an external resource, or calculating the animation progress.

The temptation to use `Date.now` is huge:

```js
const start = Date.now();
const result = await fetch('/data');

console.log('Elapsed time in milliseconds:', Date.now() - start);
```

Looks like the problem is solved, and you can go grab some coffee. Here is the thing: the duration calculated this way may turn out to be negative.

## What’s wrong with Date.now?

The main problems of the `Date.now` function in the context of our task are as follows:

1. `Date.now` is not [monotonic](https://en.wikipedia.org/wiki/Monotonic_function), meaning, it can both increase and decrease (which leads to negative duration in calculations).
2. It does not guarantee uniform growth of returned values.

The root of these problems is that `Date` and its functions use a system clock that is affected by external influences:

* system time can be changed by a user;
* operating system services regularly [synchronize time with the precise internet clock](https://en.wikipedia.org/wiki/Network_Time_Protocol), which may lead to time leaps if the local clock is far behind or ahead.

## What to use instead of Date.now?

### In the browser

The [High Resolution Time specification](https://www.w3.org/TR/hr-time) describes `performance.now` function, which not only solves the stated problems, but also increases the accuracy of measurements to microseconds ([depending on browser](https://github.com/w3c/hr-time/issues/56)). For details see the specification or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).

### In Node.js

Node.js provides [`process.hrtime`](https://nodejs.org/api/process.html#process_process_hrtime_time) and [`process.hrtime.bigint`](https://nodejs.org/api/process.html#process_process_hrtime_bigint) functions that also don’t depend on the system clock and increase the accuracy to nanoseconds.
