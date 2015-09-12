var gulp          = require('gulp');
var iconFont      = require('../config/iconFont');
var images        = require('../config/images');
var javascripts   = require('../config/javascripts');
var sass          = require('../config/sass');
var html          = require('../config/html');
var watch         = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images'); });
  watch(javascripts.src, function() { gulp.start('javascripts'); });
  watch(sass.src, function() { gulp.start('sass'); });
  watch(iconFont.src, function() { gulp.start('iconFont'); });
  watch(html.src, function() { gulp.start('html'); });
});
