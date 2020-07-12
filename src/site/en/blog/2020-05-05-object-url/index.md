---
layout: article
tags: [articles, en]
date: 2020-05-05
author: andrey-romanov
title: URL.createObjectURL instead of FileReader.readAsDataURL
description: Fast and cheap way to get an URL for a file or a blob
---
If you need to show an image from a [file](https://developer.mozilla.org/en-US/docs/Web/API/File) or a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob), don’t use [`FileReader.readAsDataURL`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) for this job. This method requires significant work to read the blob and convert it into data URL. And although it works asynchronously, which is good because it doesn’t block the main thread, in general it’s inconvenient.

[`URL.createObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) is a better solution: it synchronously and in no time generates temporary URL and binds it to the blob. Generating such URL doesn’t require reading the blob, hence it is much faster and cheaper (see [algorithm details in the specification](https://w3c.github.io/FileAPI/#url-model)).

The blob can’t be garbage collected while it has temporary URLs bound to it. So don’t forget to use [`URL.revokeObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL) to unbind URL after you’re done with it.
