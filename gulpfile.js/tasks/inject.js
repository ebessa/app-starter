var gulp            = require('gulp');
var config          = require('../config/inject');
var angularFilesort = require('gulp-angular-filesort');
var inject          = require('gulp-inject');

gulp.task('inject', function () {
  var injectStyles = gulp.src(config.src)
  .pipe(angularFilesort());

  var injectOptions = {
    addRootSlash: false
  };

  return gulp.src(config.srcHtml)
    .pipe(inject(injectStyles, injectOptions))
    .pipe(gulp.dest(config.dest));
});
