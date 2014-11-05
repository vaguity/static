var gulp = require('gulp');
var config = require('../config');
var livereload = require('gulp-livereload');

gulp.task('watch', ['watch:set', 'watch:build'], function() {
	livereload.listen();
	gulp.watch(config.sass.src, ['sass']);
});
