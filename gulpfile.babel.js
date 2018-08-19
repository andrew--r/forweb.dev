import requireDir from 'require-dir';
import gulp from 'gulp';

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', (done) => {
  gulp.series('clean', gulp.parallel('assets', 'styles', 'markup'))(done);
});
