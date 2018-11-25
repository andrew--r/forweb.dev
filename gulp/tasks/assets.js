const gulp = require('gulp');
const rev = require('gulp-rev');
const mergeStream = require('merge-stream');
const config = require('../../build.config');

gulp.task('assets', () => {
  return mergeStream(
    gulp.src([`${config.paths.source}/assets/**/!(*.css)`], {
      base: config.paths.source,
    }),
    gulp.src([
      `${config.paths.source}/pages/**/${config.localAssetsDirName}/!(*.css)`,
    ]),
  )
    .pipe(rev())
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
