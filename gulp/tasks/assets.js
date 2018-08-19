import gulp from 'gulp';
import { sourcePath, buildPath } from '../../build.config';

gulp.task('assets', () => {
  return gulp
    .src(`${sourcePath}/assets/**/*`)
    .pipe(gulp.dest(`${buildPath}/assets`));
});
