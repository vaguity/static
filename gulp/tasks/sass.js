var gulp = require('gulp');
var gulpif = require('gulp-if');
var rubySass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
	var watchCheck = typeof global.isWatching !== 'undefined' ? true : false;
	return gulp.src(config.src)
		.pipe(rubySass({
			style: 'compressed'
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest))
		.pipe(gulpif(watchCheck, livereload()));
});
