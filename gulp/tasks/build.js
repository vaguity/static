var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');

var config = require('../config');

gulp.task('build', ['sass'], function() {

	// Webpack build
	if (config.buildMethod == 'webpack') {
		global.isProduction = typeof global.isProduction !== 'undefined' ? global.isProduction : undefined;

		var webpackConfig = require('../webpack.config.js');

		var watchCheck = typeof isWatching !== 'undefined' ? true : false;

		return gulp.src(webpackConfig.entry)
			.pipe(gulpWebpack(webpackConfig, webpack))
			.pipe(gulp.dest(webpackConfig.output.path))
			.pipe(gulpif(watchCheck, livereload()));
	}
	// Standard build
	else {
		global.isProduction = typeof global.isProduction !== 'undefined' ? global.isProduction : undefined;

		var watchCheck = typeof isWatching !== 'undefined' ? true : false;

		var styles = gulp.src(config.sass.dest + '/*.css')
			.pipe(gulp.dest(config.sass.dist));

		var scripts = gulp.src(config.js.src)
			// .pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			// .pipe(sourcemaps.write())
			.pipe(gulp.dest(config.js.dist));

		var reload = gulp.src('')
			.pipe(gulpif(watchCheck, livereload()));

		return merge(styles, scripts, reload);
	}

});
