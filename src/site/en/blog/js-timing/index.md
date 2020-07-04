---
layout: article
tags: [articles, en]
date: 2020-05-10
title: Timing in JavaScript
description: Why the calculation of duration using Date.now may lead to unexpected results and how to avoid it?
---
We have some tasks on the frontend that require time measurement, such as calculating the external resource load time, or calculating the animation progress.

The temptation to use `Date.now` is great:

```js
const start = Date.now();
const result = await fetch('/data');

console.log('Elapsed time in milliseconds:', Date.now() - start);
```

Looks like the problem is solved, and you can go for coffee. Here is the thing: the duration calculated in this way can be negative.

## What's wrong with Date.now?

The main problems of the `Date.now` function in context of our task are as follows:

1. `Date.now` is not [monotonic](https://en.wikipedia.org/wiki/Monotonic_function), meaning, it can both increase and decrease (which leads to negative duration in calculations).
2. It does not guarantee the uniformity of the returned values growth.

The root of these problems is that `Date` and its functions use a system clock that is affected by external influences:

* the system time can be changed by the user;
* operating system services regularly [synchronize the time with the precise internet clock](https://en.wikipedia.org/wiki/Network_Time_Protocol), which may lead to time leaps if the local clock is far behind or ahead.

## What to use instead of Date.now?

### In the browser

The [High Resolution Time specification](https://www.w3.org/TR/hr-time) describes `performance.now` function, which not only solves the stated problems, but also increases the accuracy of measurements to microseconds ([depending on browser](https://github.com/w3c/hr-time/issues/56)). For details see the specification or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).

### In Node.js

Node.js provides [`process.hrtime`](https://nodejs.org/api/process.html#process_process_hrtime_time) and [`process.hrtime.bigint`](https://nodejs.org/api/process.html#process_process_hrtime_bigint) functions that are also independent of the system clock and increase the accuracy to nanoseconds.
