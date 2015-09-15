var config = require('./')

module.exports = {
  src: config.sourceAssets + '/images/sprite/*',
  srcRetina: config.sourceAssets + '/images/sprite/*@2x.png',
  destImg: config.publicAssets + "/images",
  destCss: config.sourceAssets + "/css/generated/"
}
