var dist = './dist';
var src = './src';

// packageType specifies where the main Bower files of a package should go,m used by config.bower.dest

var packageType = {
	cssPartial: src + '/scss/partials',
	cssLib: src + '/scss/lib',
	jsLib: src + '/js/lib'
};

// config.sass, used by /tasks/sass.js and /tasks/watch.js
// Defines src and intermediate dest for sass files for watch and build purposes

// config.js, used by /tasks/watch.js
// Defines js files to watch

// config.bower, used by /tasks/dependencies.js
// Determines where main Bower files get moved for each Bower package
// Main Bower files are specified in bower.json in the root directory in .overrides
// .name: package name
// .rename: filename to rename
// .dest: intermediate destination, as specified in the packageType object
// .path: specifies the path of the main Bower files within the Bower package

var config = {
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
};

module.exports = config;
