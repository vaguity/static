var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(plugins.plumber())
		.pipe(plugins.rubySass({
			style: 'compressed'
		}))
		.on('error', handleErrors)
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(config.dest));
});
