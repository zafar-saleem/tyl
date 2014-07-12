/*global require:false */
require.config({
	shim: {},

	paths: {
		'jquery': 'libs/jquery/dist/jquery',
		'underscore': 'libs/underscore/underscore',
        'underscore': 'plugins/text'
	}
});

require(['app'], function (App) {
    App.init();
});
