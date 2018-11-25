const gulp = require('gulp');
const del = require('del');
const config = require('../../build.config');

gulp.task('clean', () => {
  return del([config.paths.build]);
});
