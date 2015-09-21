var config = require('./')

module.exports = {
  src: [
    config.sourceDirectory + '/angular/app.js',
    config.sourceDirectory + '/angular/**/*.js'
  ],
  dest: config.publicAssets + '/js/angular'
}
