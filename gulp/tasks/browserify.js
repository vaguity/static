var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var config = require('../config').browserify;
var streamify = require('gulp-streamify');
var livereload = require('gulp-livereload');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

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
				.pipe(sourcemaps.init({loadMaps: true}))
					.pipe(uglify())
				.pipe(sourcemaps.write())
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
