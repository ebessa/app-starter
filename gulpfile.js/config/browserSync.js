var config = require('./')

module.exports = {
  server: {
    baseDir: config.publicDirectory
  },
  port: 8983,
  files: ['public/**/*.html']
}
