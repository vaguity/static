var browserify = require('browserify');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');

var config = require('../config').browserify;

// ------------------------------------

gulp.task('browserify', function(callback) {

	var bundleQueue = config.bundleConfigs.length;

	var browserifyThis = function(bundleConfig) {

		var bundler = browserify({
			cache: {},
			packageCache: {},
			fullPath: true,
			entries: bundleConfig.entries,
			debug: config.debug
		});

		var bundle = function() {

			bundleLogger.start(bundleConfig.outputName);

			return bundler
				.bundle()
				.on('error', handleErrors)
				.pipe(source(bundleConfig.outputName))
				.pipe(buffer())
				.pipe(gulpif(config.debug, sourcemaps.init({loadMaps: true})))
					.pipe(uglify())
				.pipe(gulpif(config.debug, sourcemaps.write()))
				.pipe(gulp.dest(bundleConfig.dest))
				.on('end', reportFinished)
				.pipe(gulpif(global.isWatching, livereload()));
		};

		if (global.isWatching) {
			bundler = watchify(bundler);
			bundler.on('update', bundle);
		}

		var reportFinished = function() {
			bundleLogger.end(bundleConfig.outputName);

			if (bundleQueue) {
				bundleQueue--;
				if (bundleQueue === 0) {
					callback();
				}
			}
		};

		return bundle();
	};

	config.bundleConfigs.forEach(browserifyThis);

});
