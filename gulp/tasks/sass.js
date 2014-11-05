var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(rubySass({
			style: 'compressed'
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest));
});
