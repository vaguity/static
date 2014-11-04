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
		debug: true,
		bundleConfigs: [{
			entries: src + '/js/lib/modernizr.js',
			dest: dist + '/assets/js/lib',
			outputName: 'modernizr.min.js'
		},
		{
			entries: src + '/js/lib/jquery.js',
			dest: dist + '/assets/js/lib',
			outputName: 'jquery.min.js'
		},
		{
			entries: src + '/js/lib/enquire.js',
			dest: dist + '/assets/js/lib',
			outputName: 'enquire.min.js'
		},
		{
			entries: src + '/js/script.js',
			dest: dist + '/assets/js',
			outputName: 'script.min.js'
		}]
	}
}
