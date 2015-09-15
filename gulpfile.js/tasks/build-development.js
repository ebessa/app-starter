var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['fonts', 'images', 'sprite'], ['csslibs', 'sass', 'javascripts', 'vendor-scripts'], 'html', ['watch', 'browserSync'], cb);
});
