var gulp    = require('gulp');
var shell   = require('gulp-shell');
var config  = require('../config/intern');

// A task to run the Selenium Server Standalone
gulp.task("selenium:start", function(){
    var Promise = require("bluebird");

    var deferred = Promise.defer();

    var jar = require("selenium-server-standalone-jar");
    var webdriver = require("selenium-webdriver"),
        remote = require("selenium-webdriver/remote"),
        chromedriver = require("chromedriver");

    var server = new remote.SeleniumServer(jar.path, {
        host: config.selServer,
        port: config.selPort,
        args: [
                "-Dwebdriver.chrome.driver=" + chromedriver.path,
            "-singleWindow", "-trustAllSSLCertificates", "-browserSessionReuse"
        ]
    });

    server.loopbackOnly_ = true; // force use of 127.0.0.1

    server.start().then(function(url){
        deferred.resolve(server);
    });

    return deferred.promise;
});


// A task to run the tests. It has two dependencies: selenium and local servers.
gulp.task('intern', ['selenium:start'], function() {
    process.argv = ['node', './node_modules/intern/bin/intern-runner.js', 'config=tests/intern'];

    var runner = require('intern/runner');
});
