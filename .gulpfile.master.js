var gulp = require('gulp');
var gulpif = require('gulp-if');
var hub = require('gulp-hub');
var prompt = require('gulp-prompt');
var shell = require('gulp-shell');

var initScript = function() {
	if (typeof init !== 'undefined') {
		console.log('Warning: Project already initialized. Running init script again.')
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
			'printf "var init = true;\n\n" | cat - gulpfile.js > .gulpfile.js.tmp && mv .gulpfile.js.tmp gulpfile.js',
			'printf "\nhub(\'gulp/gulpfile.js\');\n" >> gulpfile.js\n'
		]));
}

var resetScript = function(resetCheck) {
	resetCheck = typeof resetCheck !== 'undefined' ? resetCheck : false;
	if (typeof init == 'undefined') {
		console.log('Error: Project not initialized. Run \'gulp init\'');
		return;
	}
	return gulp.src('')
		.pipe(gulpif(!resetCheck, prompt.confirm({
			message: 'Are you sure? This will delete all dependencies.',
			default: true
		})))
		.pipe(shell([
			'rm -rf node_modules',
			'rm -rf src/lib/*',
			'cp .gulpfile.master.js gulpfile.js'
		]))
		.pipe(gulpif(resetCheck, shell([
			'npm install'
		])))
		.pipe(shell([
			'rm -rf node_modules',
			'rm -rf bower_components',
			'rm -rf .sass-cache'],
			{cwd: './gulp'}
		))
		.pipe(gulp.dest(''));
}

gulp.task('init', function() { initScript(); });

gulp.task('reset', function() { resetScript(false); });

gulp.task('reinit', function() {
	resetScript(true);
	initScript();
});

gulp.task('update', ['reinit'], function() { initScript(); });
