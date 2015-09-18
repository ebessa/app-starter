var gulp       = require('gulp');
var concat     = require('gulp-concat');
var config     = require('../config/vendor-scripts');

gulp.task('vendor-scripts', function() {
  var scr = gulp.src(config.rootSrc + 'modernizr-custom.js')
  .pipe(gulp.dest(config.dest));

  src = gulp.src(config.src)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.dest));

  return src;
});
