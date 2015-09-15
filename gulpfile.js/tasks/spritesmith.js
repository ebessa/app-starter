var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../config/spritesmith');
var merge       = require('merge-stream');

gulp.task('sprite', function () {
  var spriteData = gulp.src(config.src)
  .pipe(spritesmith({
    imgName: 'sprite.png',
    // retinaImgName: 'sprite@2x.png',
    cssName: 'sprite.scss',
    // retinaSrcFilter: config.srcRetina,
    imgPath: "../images/sprite.png",
    // retinaImgPath: "../images/sprite@2x.png"
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    .pipe(gulp.dest(config.destImg));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest(config.destCss));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});
