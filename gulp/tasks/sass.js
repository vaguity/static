var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var rubySass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');

var config = require('../config').sass;


// Add check if it's a webpack build, or check for environment, then do not run sourcemaps
gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(rubySass({
			style: 'compressed',
			"sourcemap=none": true
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest))
});
