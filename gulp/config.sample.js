var dist = './dist';
var src = './src';

var packageType = {
	cssPartial: src + '/scss/partials',
	cssLib: src + '/scss/lib',
	jsLib: src + '/js/lib'
}

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
				dest: packageType.cssPartial
			},
			{
				name: 'html5-boilerplate',
				rename: '_html5bp.scss',
				dest: packageType.cssPartial
			},
			{
				name: 'modernizr',
				dest: packageType.jsLib
			},
			{
				name: 'jquery',
				path: '/dist',
				dest: packageType.jsLib
			},
			{
				name: 'jquery-ui',
				dest: packageType.jsLib
			},
			{
				name: 'enquire',
				path: '/dist',
				dest: packageType.jsLib
			},
			{
				name: 'susy',
				dest: packageType.cssLib
			},
			{
				name: 'compass-breakpoint',
				dest: packageType.cssLib
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
