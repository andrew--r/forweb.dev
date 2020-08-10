---
layout: article
tags: [articles, en]
author: andrey-romanov
translators: [stcherenkov]
date: 2020-05-04
title: When code duplication is allowed?
description: Analyzing a large code base, we immediately see cases in which the code should have been reused. But if you are just starting a project, cases of code reuse are not so obvious.
---

Analyzing a large code base, we immediately see cases in which the code should have been reused. But if you are just starting a project, cases of code reuse are not so obvious: it is difficult to predict how this or that code fragment will evolve.

It is better to duplicate the code at the initial stage when you don't know how it will develop further. You will be able to think about reusing it in the future when the code base grows enough and gets more mature.

At the initial stage, reusing makes it difficult to change and rewrite the code further. To reuse some code fragment you need to separate it into a module to be used in different parts of the program. Changing such a module requires checking of operability of all the program parts depending on it. Duplication allows you to reduce the number of external dependencies to minimum: a code fragment is used directly where it is written. It allows you to rewrite this fragment and not be afraid that something will break in the other part of the program.

So, code duplication allows you to minimize the number of application fragments depending on it and thus simplify its further improvement. One more recommendation follows from this: duplicate the code which is more likely to change in the future. The more specific your code is, the more probable it will change in the future. For example, the business logic changes much more often than the low-level logic of communication with the server (the HTTP standard is updated every few years).
