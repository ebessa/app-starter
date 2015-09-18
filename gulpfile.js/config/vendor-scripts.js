var config = require('./')

module.exports = {
  rootSrc: config.sourceAssets + '/js/libs/',
  src: [
    config.sourceAssets + '/js/libs/jquery.js'
  ],
  dest: config.publicAssets + '/js'
}
