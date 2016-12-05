/*global require:false*/
require.config({
    urlArgs: 'version=' + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery/dist/jquery',
        'underscore': 'libs/underscore/underscore',
        'text': 'plugins/text'
    }
});

