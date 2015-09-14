'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create(); 

// es6scripts
gulp.task('es6scripts', [], function() {
	return gulp.src('./src/app/**/*.js')
    .pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./tmp/serve/js'))
		.pipe(browserSync.reload({ stream: true }));
});

// typescript
gulp.task('typescript', function() {
  
});

// serve
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: [
				'./src/',
				'./tmp/',
				'./bower_components/'
			]
		}
	});
	gulp.watch(['./src/app/**/*.js'], function(){
		gulp.start('es6scripts');
	});
	gulp.watch(['./src/*.html'], function(event){
		browserSync.reload(event.path);
	});
});