var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var config      = require('../config/css-libs');
var gulp        = require('gulp');

gulp.task('csslibs', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
