---
layout: article
tags: [articles, en]
date: 2020-05-05
author: andrey-romanov
translators: [stcherenkov]
title: UX of a drag-and-drop files uploading
description: How to implement drag-and-drop file upload so that users won’t suffer?
og:
  image:
    url: amplifr.jpg
    height: 919
    width: 1200
---
When implementing a form with a file upload field, it is a good practice to support drag and drop gesture from files to form.

Usually, the size of the drop area is limited:

<img class="bordered" src="vk.jpg" alt="VK screenshot on file dragging" height="919" width="1200" />

If there is only one file upload field, this restriction is hard to justify, and it can be disturbing for users: the smaller the available area is, the harder it is for a user to aim at it.

A more user-friendly approach is to stretch the drop area to the viewport. For example, such approach is used on GitHub and [Amplifr](https://amplifr.com):

<img src="amplifr.jpg" alt="Amplifr screenshot on file dragging" height="919" width="1200" />

If there are several file upload fields on a page (for example, when uploading scans of several documents is required), the drop area can still be stretched to the viewport and split into parts for each field. These areas will still be large enough.
