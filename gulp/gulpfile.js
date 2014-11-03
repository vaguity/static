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

// Source and distribution directories
var dist = __dirname + '/../dist';
var src = __dirname + '/../src';


// ------------------------------------
// Tasks
// ------------------------------------

// Sass
gulp.task('sass', function() {
	return gulp.src(src + '/scss/**/*.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.rubySass({
			style: 'compressed'
		}))
		.on('error', handleError)
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(dist + '/assets/css'))
		.pipe(plugins.livereload());
});

// Scripts
gulp.task('scripts', function() {
	return gulp.src([src + '/js/*.js', '!' + src + '/js/lib/*'])
		.pipe(plugins.plumber())
		.pipe(plugins.jshint('.jshintrc'))
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.concat('script.js'))
		.pipe(plugins.uglify())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.sourcemaps.write())
		.on('error', handleError)
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(dist + '/assets/js'))
		.pipe(plugins.livereload());
});

// Plugins
gulp.task('plugins', function() {
	return gulp.src([src + '/js/lib/**/*.js'])
		.pipe(plugins.plumber())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.uglify())
		.on('error', handleError)
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(dist + '/assets/js/lib'))
		.pipe(plugins.livereload());
});

// Watch
gulp.task('watch', function() {
	gulp.watch(src + '/scss/**/*.scss', ['sass']);
	gulp.watch(src + '/js/**/*.js', ['scripts']);
	gulp.watch(src + '/js/lib/**/*.js', ['plugins']);
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
	var susy = gulp.src(src + '/lib/susy/sass/susy/**')
		.pipe(gulp.dest(src + '/scss/lib'));
	var breakpoint = gulp.src(src + '/lib/compass-breakpoint/stylesheets/**')
		.pipe(gulp.dest(src + '/scss/lib'));

	return merge(html5bp, normalize, jquery, modernizr, jqueryui, enquire, susy, breakpoint);
});


// ------------------------------------
// Aliases and bundled tasks
// ------------------------------------

// Rebuild task
gulp.task('rebuild', ['process:dependencies']);

// Styles task
gulp.task('styles', ['sass']);

// Build task
gulp.task('build', ['styles', 'plugins', 'scripts']);

// Default task
gulp.task('default', ['build', 'watch']);


// ------------------------------------
// Archived task
// ------------------------------------

// CSScomb
// Note: CSScomb currently lacks support for sorting @include statements
// See https://github.com/csscomb/csscomb.js/issues/143
// gulp.task('comb', function() {
// 	return gulp.src(src + '/scss/**/*.scss')
// 		.pipe(plugins.plumber())
//         .pipe(plugins.csscomb())
//         .pipe(gulp.dest(src + '/scss'));
// });