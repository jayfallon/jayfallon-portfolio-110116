// task for building html required to display the website

var gulp        		= require('gulp'),
	// gulp plugins
    changed             = require("gulp-changed"),
    fileInclude         = require('gulp-file-include'),
    prettify            = require('gulp-prettify'),
    gulpFilter          = require('gulp-filter'),
    config              = require('../config');

// - build html for website
gulp.task('build:html', function(){
  var filter = gulpFilter(['**']);
  return gulp.src(config.htmlSource + '**/*.html')
    .pipe(changed(config.htmlDestination + '**/*.html'))
    .pipe(fileInclude())
    .pipe(filter)
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(config.htmlDestination));
});
