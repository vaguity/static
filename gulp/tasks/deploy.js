var gulp = require('gulp');

gulp.task('deploy:set', function() {
	global.isProduction = true;
});

gulp.task('deploy:build', ['deploy:set', 'webpack']);

gulp.task('deploy', ['deploy:set', 'deploy:build']);
