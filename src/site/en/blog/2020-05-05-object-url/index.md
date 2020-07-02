---
layout: article
tags: [articles, en]
date: 2020-05-05
title: URL.createObjectURL instead of FileReader.readAsDataURL
description: Fast and cheap way to get an URL for a file or a blob
---
If you need to show an image from [file](https://developer.mozilla.org/en-US/docs/Web/API/File) or [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob), don’t use [`FileReader.readAsDataURL`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL). It does significant work reading blob and converting it to data URL. Also it works asynchronously, which is good because it doesn’t block main thread but inconvenient.

[`URL.createObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) is a better alternative: it synchronously generates temporary URL and binds it to blob. Generating such URL doesn’t require reading the blob, hence it is much faster and cheaper (see [algorithm details in the specification](https://w3c.github.io/FileAPI/#url-model)).

Blob can’t be garbage collected while it has bound temporary URLs. You should use [`URL.revokeObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL) to unbind URL after you’re done using it.
