var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var rubySass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');

var config = require('../config').sass;


gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(rubySass({
			style: 'compressed'
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest))
});
