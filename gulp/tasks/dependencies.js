var components = require('../../bower.json');
var config = require('../config').bower;
var del = require('del');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');
var rename = require('gulp-rename');


gulp.task('clean:dependencies', function(callback) {
	del([config.src], {force: true}, callback);
});

gulp.task('rebuild:dependencies', ['clean:dependencies'], function() {
	return gulp.src(mainBowerFiles(), { base: 'bower_components'})
		.pipe(gulp.dest(config.src));
});

gulp.task('process:dependencies', ['rebuild:dependencies'], function() {

	var processDependency = function(dependency) {

		var depRenameCheck = typeof dependency.rename !== 'undefined' ? true : false;

		var depSource = config.src + '/' + dependency.name;

		if (typeof dependency.path !== 'undefined') {
			depSource = depSource + dependency.path;
		}

		if (typeof components.overrides[dependency.name] !== 'undefined') {
			if (Array.isArray(components.overrides[dependency.name].main)) {
				var depMainFiles = components.overrides[dependency.name].main;
				var depMainFilesLength = depMainFiles.length;
				var depSources = [];
				var depStreams = [];
				for (var i = 0; i < depMainFilesLength; i++) {
					var depSourcesLength = depSources.push(depSource + '/' + depMainFiles[i]);
				}
				for (var i = 0; i < depSourcesLength; i++) {
					var t = depStreams.push(gulp.src(depSources[i])
						.on('error', handleErrors)
						.pipe(gulp.dest(dependency.dest[i]))
					);
				}
				return orderedMergeStream(depStreams);
			}
			else {
				depSource += '/' + components.overrides[dependency.name].main;
			}
		}
		else {
			depSource += '/**';
		}

		return gulp.src(depSource)
			.pipe(gulpif(depRenameCheck, rename(dependency.rename)))
			.on('error', handleErrors)
			.pipe(gulp.dest(dependency.dest));
	}

	config.packages.forEach(processDependency);
});

gulp.task('dependencies', ['process:dependencies']);
