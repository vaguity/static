var dist = './dist';
var src = './src';

var cssPartialSrc = src + '/scss/partials';
var cssLibSrc = src + '/scss/lib';
var jsSrc = src + '/js/lib';

module.exports = {
	sass: {
		src: src + '/scss/**/*.scss',
		dest: dist + '/assets/css'
	},
	bower: {
		src: src + '/lib',

		packages: [
			{
				name: 'normalize-scss',
				dest: cssPartialSrc
			},
			{
				name: 'html5-boilerplate',
				rename: '_html5bp.scss',
				dest: cssPartialSrc
			},
			{
				name: 'modernizr',
				dest: jsSrc
			},
			{
				name: 'jquery',
				path: '/dist',
				dest: jsSrc
			},
			{
				name: 'jquery-ui',
				dest: jsSrc
			},
			{
				name: 'enquire',
				path: '/dist',
				dest: jsSrc
			},
			{
				name: 'susy',
				dest: cssLibSrc
			},
			{
				name: 'compass-breakpoint',
				dest: cssLibSrc
			}
		]
	},
	browserify: {
		// Enable source maps
		debug: true,
		// A separate bundle will be generated for each
		// bundle config in the list below
		bundleConfigs: [{
			entries: src + '/js/scripts.js',
			dest: dist + '/js/scripts.min.js',
			outputName: 'scripts.js'
		}]
	}
}
