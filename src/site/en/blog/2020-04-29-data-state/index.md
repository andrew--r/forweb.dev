---
layout: article
tags: [articles, en]
date: 2020-04-29
title: Data loading state
description: How to describe the state of the data being loaded using a single text field instead of several boolean variables.
---

One of the daily tasks of frontend developers is downloading data from the server. During the download, you usually need to show the user a spinner, and if download fails, an error message. In code, loading status is often described with boolean flags:

```javascript
const comments = {
  isLoading: false,
  isLoaded: false,
  isError: false,
  errorText: '',
  data: [],
};
```

At the first glance, these flags look convenient enough. Using those data loading looks like this:

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

It turns out to be confusing and repetitive. You have to be careful which flags you want to reset, otherwise your application will have meaningless flag combinations like `isLoading: true` and `isLoaded: true`.

A more practical approach to solve this problem is to describe the state of one `dataState` field and automatically calculate flags based on the value of this field:

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

The code has grown a bit, but the values of all flags are now changed automatically, and the probability of error due to incorrect update of one of the flags is reduced to zero. The comments uploading function becomes much simpler:

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
