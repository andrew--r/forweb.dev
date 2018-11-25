const requireDir = require('require-dir');
const gulp = require('gulp');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', (done) => {
  gulp.series('clean', 'styles', 'assets', 'markup')(done);
});
