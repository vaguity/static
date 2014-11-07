var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var livereload = require('gulp-livereload');

gulp.task('webpack', ['sass'], function() {

	global.isProduction = typeof global.isProduction !== 'undefined' ? global.isProduction : undefined;

	var config = require('../webpack.config.js');

	var watchCheck = typeof isWatching !== 'undefined' ? true : false;

	return gulp.src(config.entry)
		.pipe(gulpWebpack(config))
		.pipe(gulpif(watchCheck, livereload()));
});
