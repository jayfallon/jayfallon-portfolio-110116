//tasks for organizing, piping, linting website assets

var gulp = require('gulp'),
requireDir = require('require-dir'),
changed = require('gulp-changed'),
jshint = require('gulp-jshint'),
config = require('../config');

//pipe images for website
gulp.task('images', function(){
  return gulp.src(config.imgSource + '**/*.{jpg,png,gif,svg}')
    .pipe(changed(config.imgDestination + '**/*.{jpg,png,gif,svg}'))
    .pipe(gulp.dest(config.imgDestination));
});

// - pipe fonts for website
gulp.task('fonts', function(){
  return gulp.src(config.fontsSource + '**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(changed(config.fontsDestination + '**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe(gulp.dest(config.fontsDestination));
});

// - pipe vendor for website
gulp.task('vendor', function () {
  return gulp.src([config.vendorSource + '**/*'], {
      base: 'src'
  }).pipe(gulp.dest(config.vendorDestination));
});

// - insert javascript quality checks
gulp.task('jshint', function() {
  return gulp.src(config.jsSource + '**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.jsDestination));
});
