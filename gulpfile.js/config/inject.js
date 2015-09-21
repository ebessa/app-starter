var config = require('./')

module.exports = {
  srcHtml: config.sourceDirectory + '/views/*',
  src: config.sourceDirectory + '/angular/**/*.js',
  dest: config.publicAssets
}
