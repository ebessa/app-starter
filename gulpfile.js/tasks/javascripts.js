var browserSync  = require('browser-sync');
var changed      = require('gulp-changed');
var config       = require('../config/javascripts');
var gulp         = require('gulp');
var jshint       = require('gulp-jshint');
var concat       = require('gulp-concat');

gulp.task('javascripts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
