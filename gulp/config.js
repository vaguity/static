var dist = './dist';
var src = './src';

module.exports = {
	sass: {
		src: src + '/scss/**/*.scss',
		dest: dist + '/assets/css'
	},
	browserify: {
		// Enable source maps
		debug: true,
		// A separate bundle will be generated for each
		// bundle config in the list below
		bundleConfigs: [{
			entries: src + '/js/scripts.js',
			dest: dist,
			outputName: 'scripts.js'
		}]
	}
}
