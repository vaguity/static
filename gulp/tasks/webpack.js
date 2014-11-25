var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var gulpWebpack = require('gulp-webpack');

var webpack = require('webpack');
var config = require('../config');


gulp.task('webpack', ['sass'], function() {

	if (config.buildMethod !== 'webpack') {
		return;
	}

	global.isProduction = typeof global.isProduction !== 'undefined' ? global.isProduction : undefined;

	var webpackConfig = require('../webpack.config.js');

	var watchCheck = typeof isWatching !== 'undefined' ? true : false;

	return gulp.src(webpackConfig.entry)
		.pipe(gulpWebpack(webpackConfig, webpack))
		.pipe(gulp.dest(webpackConfig.output.path))
		.pipe(gulpif(watchCheck, livereload()));
});
