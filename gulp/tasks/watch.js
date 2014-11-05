var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['watch:set', 'watch:build'], function() {
	gulp.watch(config.sass.src, ['sass']);
});
