// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-03-21 using
// generator-karma 0.9.0

module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //bower:js
            //endbower
            'app/modules/**/*.module.ts',
            'app/modules/**/*.routes.ts',
            'app/modules/**/*.ts',
            'test/*.ts'
        ],

        // list of files / patterns to exclude
        exclude: [
            //some garbage files added by typescript preprocessor
            '**/*.ktp.ts'
        ],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-typescript-preprocessor',
            'karma-webpack'
        ],

        preprocessors: {
            '**/*.ts': ['typescript']
        },

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                target: 'es5',
                sourceMap: true,
                sourceRoot: '/',
                comments: true,
                module: 'amd'
            }
        },

        typings: [
            'typings/tsd.d.ts'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
