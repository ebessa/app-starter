var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/css/**/*.{sass,scss}",
  dest: config.publicAssets + '/css',
  settings: {
    indentedSyntax: false,
    imagePath: 'assets/images' // Used by the image-url helper
  }
}
