import gulp from 'gulp';
import del from 'del';
import { buildPath } from '../../build.config';

gulp.task('clean', () => {
  return del([buildPath]);
});
