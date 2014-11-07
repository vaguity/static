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
		dest: src + '/css'
	},
	js: {
		src: src + '/js/**/*.js'
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
	}
}
