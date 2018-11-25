const gutil = require('gulp-util');
const through = require('through2');

module.exports = function esTemplates(options = {}) {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new gutil.PluginError('es-templates', 'Streaming not supported'),
      );
      return callback();
    }

    try {
      const renderPageTemplate = require(file.path);

      file.basename = 'index.html';

      const pagePath = file.relative.replace(/\/?index\.html$/, '');
      let context = {};

      if (typeof options.getContext === 'function') {
        context = options.getContext(pagePath);
      }

      file.contents = new Buffer(renderPageTemplate(context));
    } catch (error) {
      console.error(error);
      this.emit('error', new gutil.PluginError('es-templates', error));
    }

    this.push(file);
    callback();
  });
};
