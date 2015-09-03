'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create(); 

// scripts
gulp.task('scripts', [], function() {
	return gulp.src('/app/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('.tmp/serve/app'))
		.pipe(browserSync.reload({ stream: true }));
});

// serve
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: ['./src/', './tmp/']
		}
	});
	gulp.watch(['./**/*.js', './**/*.html']).on('change', browserSync.reload);
});