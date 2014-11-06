var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webkpack');

gulp.task('webpack', function(callback) {
	webpack({
		// configuration
	}, function(err, stats) {
		if (err) throe new gtuil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			// output options
		}));
		callback();
	});
});
