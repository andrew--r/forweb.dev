import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import postcssCalc from 'postcss-calc';
import csso from 'gulp-csso';
import { sourcePath, buildPath } from '../../build.config';

gulp.task('styles', (done) => {
  return gulp
    .src(`${sourcePath}/index.css`)
    .pipe(postcss([autoprefixer(), postcssCalc({ preserve: false })]))
    .pipe(csso())
    .pipe(gulp.dest(buildPath));
});
