'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var typescript = require('gulp-typescript');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create(); 

gulp.task('babel-compile', [], function() {
	return gulp.src('./src/app/**/*.js')
    .pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./tmp/serve/js'))
		.pipe(browserSync.reload({ stream: true }));
});

// typescript
gulp.task('typescript-compile', function() {
  
  var tsProject = typescript.createProject({
      target: "ES5",
      sortOutput: true,
      noImplicitAny: true
  });
  
  return gulp.src('./src/app/**/*.ts')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./tmp/serve/js'))
    .pipe(browserSync.reload({ stream: true }));
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
		gulp.start('babel-compile');
	});
  gulp.watch(['./src/app/**/*.ts'], function(){
		gulp.start('typescript-compile');
	});
	gulp.watch(['./src/*.html'], function(event){
		browserSync.reload(event.path);
	});
});