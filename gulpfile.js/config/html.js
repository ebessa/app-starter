var config = require('./')

module.exports = {
  src: config.sourceDirectory + '/views/**/*.html',
  srcJS: config.publicAssets + '/js/angular/**/*.js',
  dest: config.publicDirectory
}
