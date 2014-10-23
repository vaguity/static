var gulp = require('gulp');
var hub = require('gulp-hub');
var prompt = require('gulp-prompt');
var shell = require('gulp-shell');

gulp.task('init', function() {
	if (typeof init !== 'undefined') {
		return gulp.src('')
		.pipe(shell([
			'npm install',
			'bundle config build.compass --pre',
			'bundle install',
			'bower install'],
			{cwd: './gulp'})
		)
	}
	return gulp.src('')
		.pipe(shell([
			'npm install',
			'bundle config build.compass --pre',
			'bundle install',
			'bower install'],
			{cwd: './gulp'})
		)
		.pipe(shell([
			'printf "var init = true;\n\n" | cat - gulpfile.js > gulpfile.js.tmp && mv gulpfile.js.tmp gulpfile.js',
			'printf "\nhub(\'gulp/gulpfile.js\');\n" >> gulpfile.js\n'
		]));
});

gulp.task('reset', function() {
	if (typeof init == 'undefined') {
		console.log('Error: Project not initialized. Run \'gulp init\'');
		return;
	}
	return gulp.src('')
		.pipe(prompt.confirm({
			message: 'Are you sure? This will delete all node_modules and bower_components.',
			default: true
		}))
		.pipe(shell([
			'rm -rf node_modules'
		]))
		.pipe(shell([
			'rm -rf node_modules',
			'rm -rf bower_components',
			'rm -rf .sass-cache'],
			{cwd: './gulp'}
		))
		.pipe(gulp.dest(''));
});
