// ------------------------------------
// Load plugins
// ------------------------------------

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({ camelize: true }),
	mainBowerFiles = require('main-bower-files'),
	del = require('del'),
	merge = require('merge-stream');

// Error handling
function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}

// Distribution directory
var dist = __dirname + '/../dist';
var src = __dirname + '/../src';


// ------------------------------------
// Tasks
// ------------------------------------

// CSScomb
gulp.task('comb', function() {
	return gulp.src(src + '/scss/**/*.scss')
		.pipe(plugins.plumber())
        .pipe(plugins.csscomb())
        .pipe(gulp.dest(src + '/scss'));
});

// Sass
gulp.task('sass', function() {
	return gulp.src(src + '/scss/**/*.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.rubySass({
			compass: true,
			style: 'compressed',
			// Note: This syntax gets fixed with an update to gulp-ruby-sass
			'sourcemap=none': true
		}))
		.pipe(gulp.dest(dist + '/assets/css'))
		.on('error', handleError);
});

// Scripts
gulp.task('scripts', function() {
	return gulp.src([src + '/js/*.js', '!' + src + '/js/lib/*'])
		.pipe(plugins.plumber())
		.pipe(plugins.jshint('.jshintrc'))
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.concat('script.js'))
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.uglify())
		.on('error', handleError)
		.pipe(gulp.dest(dist + '/assets/js'))
});

gulp.task('plugins', function() {
	return gulp.src([src + '/js/lib/**/*.js'])
		.pipe(plugins.plumber())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.uglify())
		.on('error', handleError)
		.pipe(gulp.dest(dist + '/assets/js/lib'));
});

// Dependencies
gulp.task('clean:dependencies', function(callback) {
	del([src + '/lib'], {force: true}, callback);
});

gulp.task('rebuild:dependencies', ['clean:dependencies'], function() {
	return gulp.src(mainBowerFiles(), { base: 'bower_components' })
		.pipe(gulp.dest(src + '/lib'));
});

gulp.task('process:dependencies', ['clean:dependencies', 'rebuild:dependencies'], function() {
	var html5bp = gulp.src(src + '/lib/html5-boilerplate/css/main.css')
		.pipe(plugins.rename('_html5bp.scss'))
		.pipe(gulp.dest(src + '/scss/partials'));
	var normalize = gulp.src(src + '/lib/normalize-scss/_normalize.scss')
		.pipe(gulp.dest(src + '/scss/partials'));
	var jquery = gulp.src(src + '/lib/jquery/dist/assets/jquery.js')
		.pipe(gulp.dest(src + '/js/lib'));
	var modernizr = gulp.src(src + '/lib/modernizr/modernizr.js')
		.pipe(gulp.dest(src + '/js/lib'));
	var jqueryui = gulp.src(src + '/lib/jquery-ui/jquery-ui.js')
		.pipe(gulp.dest(src + '/js/lib'));
	var enquire = gulp.src(src + '/lib/enquire/dist/enquire.js')
		.pipe(gulp.dest(src + '/js/lib'));

	return merge(html5bp, normalize, jquery, modernizr, jqueryui, enquire);
});

// Watch
gulp.task('watch', function() {
	gulp.watch(src + '/scss/**/*.scss', ['styles']);
	gulp.watch(src + '/js/**/*.js', ['scripts']);
});


// ------------------------------------
// Aliases and bundled tasks
// ------------------------------------

// Rebuild task
gulp.task('rebuild', ['process:dependencies']);

// Styles task
gulp.task('styles', ['sass']);

// Build task
gulp.task('build', ['comb', 'styles', 'plugins', 'scripts']);

// Default task
gulp.task('default', ['build', 'watch']);
