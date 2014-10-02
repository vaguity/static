// ------------------------------------
// Load plugins
// ------------------------------------
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({ camelize: true }),
	mainBowerFiles = require('main-bower-files'),
	del = require('del');

// Establish error handling
function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}


// ------------------------------------
// Tasks
// ------------------------------------

// CSSComb
gulp.task('comb', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(plugins.plumber())
        .pipe(plugins.csscomb())
        .pipe(gulp.dest('src/scss'));
});

// Compass
gulp.task('compass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.compass({
		config_file: 'config.rb',
		css: 'css',
		sass: 'scss',
		require: ['susy', 'breakpoint'],
		}))
		.on('error', function(err) {
			handleError
			this.emit('end')
		});
});

// Scripts
gulp.task('scripts', function() {
	return gulp.src(['src/js/*.js', '!src/js/lib/*'])
		.pipe(plugins.plumber())
		.pipe(plugins.jshint('.jshintrc'))
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.concat('script.js'))
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(plugins.notify({ message: 'Scripts task complete' }));
});

// Dependencies
gulp.task('clean:dependencies', function() {
	del(['src/lib/*']);
});

gulp.task('dependencies', function() {
	return gulp.src(mainBowerFiles(), { base: 'bower_components' })
		.pipe(gulp.dest('src/lib'));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js', ['scripts']);
});


// ------------------------------------
// Aliases and bundled tasks
// ------------------------------------

// Styles task
gulp.task('styles', ['compass']);

// Build task
gulp.task('build', ['comb', 'styles', 'scripts']);

// Rebuild task
gulp.task('rebuild', ['clean:dependencies', 'dependencies']);

// Default task
gulp.task('default', ['comb', 'styles', 'scripts', 'watch']);
