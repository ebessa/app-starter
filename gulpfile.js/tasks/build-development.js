var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['fonts', 'images'], ['csslibs', 'sass', 'javascripts'], 'html', ['watch', 'browserSync'], cb);
});