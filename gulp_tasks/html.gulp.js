// task for building html required to display the website

var gulp        		= require('gulp'),
	// gulp plugins
    changed             = require("gulp-changed"),
    fileInclude         = require('gulp-file-include'),
    prettify            = require('gulp-prettify'),
    gulpFilter          = require('gulp-filter'),
    dependencies        = require('gulp-html-dependencies'),
    config              = require('../config');

// - build dependencies found in _head.html
gulp.task('dependencies', function() {
  return gulp.src('src/html/test/_head.html')
    .pipe(dependencies({
        dest: 'build',
        prefix: '/vendor',
        flat: true
    }))
    .pipe(gulp.dest('src/html/_global/'));
});


// - build html for website
gulp.task('build:html', function(){
  var filter = gulpFilter(config.htmlSource + '/*.html');
  return gulp.src(config.htmlSource + '/*.html')
    .pipe(changed(config.htmlDestination + '**/*.html'))
    .pipe(fileInclude())
    .pipe(filter)
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(config.htmlDestination));
});
