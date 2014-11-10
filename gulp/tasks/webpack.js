var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var gulpWebpack = require('gulp-webpack');

var webpack = require('webpack');


gulp.task('webpack', ['sass'], function() {

	global.isProduction = typeof global.isProduction !== 'undefined' ? global.isProduction : undefined;

	var config = require('../webpack.config.js');

	var watchCheck = typeof isWatching !== 'undefined' ? true : false;

	return gulp.src(config.entry)
		.pipe(gulpWebpack(config, webpack))
		.pipe(gulp.dest(config.output.path))
		.pipe(gulpif(watchCheck, livereload()));
});
