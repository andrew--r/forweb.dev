---
layout: article
tags: [articles, en]
date: 2020-05-05
title: Files uploading drag-and-drop UX
description: How to implement drag-and-drop file upload so that users won't suffer
---
When implementing a form with a file upload field, it is a good practice to support drag and drop gesture from files to form.

Usually, the drop area size is limited:

<img src="vk.jpg" alt="VK screenshot on file dragging" height="919" width="1200" />

If there is only one file upload field, this restriction is difficult to justify, and the user is hampered by it: the smaller the available area is, the harder it is for the user to aim at it.

A more user-friendly approach is to expand the available drag and drop area to the full screen. For example, the way it is done on [Amplifr](https://amplifr.com) and Github:

<img src="amplifr.jpg" alt="Amplifr screenshot on file dragging" height="919" width="1200" />

If there are several file upload fields on the page (for example, when uploading scans of several documents), the drag and drop area can still be expanded fullscreen and split in parts for each field. These areas will still be large enough.
