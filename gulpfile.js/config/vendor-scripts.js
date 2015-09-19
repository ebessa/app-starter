var config = require('./')

module.exports = {
  rootSrc: config.sourceAssets + '/js/libs/',
  src: [
    config.sourceAssets + '/js/libs/angular.js'
    config.sourceAssets + '/js/libs/angular-ui-router.js'
  ],
  dest: config.publicAssets + '/js'
}
