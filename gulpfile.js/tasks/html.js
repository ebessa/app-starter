var browserSync     = require('browser-sync');
var config          = require('../config/html');
var gulp            = require('gulp');
var handleErrors    = require('../lib/handleErrors');
var angularFilesort = require('gulp-angular-filesort');
var inject          = require('gulp-inject');

gulp.task('html', function() {
  var injectScripts = gulp.src(config.srcJS)
  .pipe(angularFilesort());

  var injectOptions = {
    addRootSlash: false,
    transform : function ( filePath, file, i, length ) {
      var newPath = filePath.replace( 'public/', '' );
      return '<script src="' + newPath  + '"></script>';
    }
  };

  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(inject(injectScripts, injectOptions))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
