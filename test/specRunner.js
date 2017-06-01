
require.config({
    baseUrl: "../../../",
    paths: {
        'backbone' : '../js/libs/vendor/backbone/backbone',
        'jquery'        : 'assets/js/libs/vendor/jquery/dist/jquery',
        'underscore': 'assets/js/libs/vendor/underscore/underscore',
        'jquery-ui' : 'assets/js/libs/vendor/jquery-ui/jquery-ui',
        'config' : 'assets/js/app/config',
        'session' : 'assets/js/app/session',
        'mainFile' : 'assets/js/app/main',
        'mocha'         : 'node_modules/mocha/mocha',
        'chai'          : 'node_modules/chai/chai'

    },
    shim : {
        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },
        "underscore": {
            exports: "_"
        },
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

define(function(require) {
    var chai = require('chai');
    require('mocha');
    require('jquery');

    window.expect = chai.expect;

    if (typeof window.initMochaPhantomJS === 'function') {
        window.initMochaPhantomJS();
    }

    mocha.setup('bdd');

    require([
        'spec-client.js',
    ], function(require) {
        if (window.mochaPhantomJS) {
            mochaPhantomJS.run();
        }
        else {
            mocha.run();
        }
    });

});
