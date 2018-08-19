import gulp from 'gulp';
import { reactToStaticMarkup } from '../plugins/react-to-static-markup';
import { sourcePath, buildPath } from '../../build.config';

gulp.task('markup', () => {
  return gulp
    .src(`${sourcePath}/pages/**/*.js`, { read: false })
    .pipe(reactToStaticMarkup())
    .pipe(gulp.dest(buildPath));
});
