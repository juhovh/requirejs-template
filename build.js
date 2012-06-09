({
	appDir: 'webapp/',
	baseUrl: 'src/',

	// Optimization rules
	//optimize: 'none',
	dir: 'webapp-build',

	stubModules: ['cs'],

	paths: {
		// RequireJS plugins
		cs: '../lib/require/cs',
		text: '../lib/require/text',
		i18n: '../lib/require/i18n',

		// CoffeeScript compiler for cs
		CoffeeScript: '../lib/require/coffee-script',

		// 3rd party libraries
		jquery: '../lib/jquery-1.7.2',
		underscore: '../lib/underscore-1.3.3',
		backbone: '../lib/backbone-0.9.2'
	},
	shim: {
		'underscore': {
			exports: function() {
				return this._.noConflict();
			}
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: function($, _) {
				return this.Backbone.noConflict();
			}
		}
	},
	modules: [{
		name: 'main',
		exclude: ['CoffeeScript']
	}]
})
