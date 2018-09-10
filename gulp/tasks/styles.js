import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import postcssCalc from 'postcss-calc';
import postcssEasyImport from 'postcss-easy-import';
import postcssColorFunction from 'postcss-color-function';
import csso from 'gulp-csso';
import { sourcePath, buildPath } from '../../build.config';

gulp.task('styles', (done) => {
  return gulp
    .src(`${sourcePath}/styles/index.css`)
    .pipe(
      postcss([
        postcssEasyImport(),
        postcssColorFunction(),
        postcssCalc({ preserve: false }),
        autoprefixer(),
      ]),
    )
    .pipe(csso())
    .pipe(gulp.dest(buildPath));
});
