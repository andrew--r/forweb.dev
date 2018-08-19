import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import path from 'path';
import through from 'through2';
import PluginError from 'plugin-error';

const pluginName = 'react-to-static-markup';

export function reactToStaticMarkup() {
  return through.obj(function(file, encoding, callback) {
    if (file.isStream()) {
      callback(new PluginError(pluginName, 'Streaming not supported'));
    }

    try {
      const Component = require(file.path).default;
      const markup = `<!DOCTYPE html>${renderToStaticMarkup(<Component />)}`;

      file.contents = Buffer.from(markup);
      file.extname = '.html';
      this.push(file);
    } catch (error) {
      this.emit(
        'error',
        new PluginError(pluginName, error, { fileName: file.path }),
      );
    }

    callback(null, file);
  });
}
