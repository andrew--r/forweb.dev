const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssEasyImport = require('postcss-easy-import');
const postcssColorFunction = require('postcss-color-function');
const csso = require('gulp-csso');
const rev = require('gulp-rev');
const rename = require('gulp-rename');
const config = require('../../build.config');

gulp.task('styles', () => {
  return gulp
    .src(`${config.paths.source}/{pages,assets}/**/*.css`)
    .pipe(
      postcss([postcssEasyImport(), postcssColorFunction(), autoprefixer()]),
    )
    .pipe(csso())
    .pipe(rev())
    .pipe(
      rename((path) => {
        path.dirname = path.dirname.replace(/^pages\/?/, '');
      }),
    )
    .pipe(gulp.dest(config.paths.build))
    .pipe(
      rev.manifest({
        base: config.paths.build,
        path: `${config.paths.build}/rev-manifest.json`,
        merge: true,
      }),
    )
    .pipe(gulp.dest(config.paths.build));
});
