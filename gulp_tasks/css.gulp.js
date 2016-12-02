// task required to build the CSS to display the template website

var gulp        				= require('gulp'),
		// gulp plugins
		changed             = require('gulp-changed'),
		sourcemaps         	= require('gulp-sourcemaps'),
		watch								= require('gulp-watch'),
		gutil              	= require('gulp-util'),
    // postcss library plugins
    lost 								= require('lost'),
    cssNano             = require('cssnano'),
    autoprefixer        = require('autoprefixer'),
    rucksack           	= require('rucksack-css'),
    // postcss plugins
    postcss             = require('gulp-postcss'),
    imageSet           	= require('postcss-image-set'),
    cssFocus            = require('postcss-focus'),
    precss              = require('precss'),
    pxtorem             = require('postcss-pxtorem'),
    cssShort            = require('postcss-short'),
    flexbox             = require('postcss-flexbox'),
    flexbugs            = require('postcss-flexbugs-fixes'),
    subpixels           = require('postcss-round-subpixels'),
		magician						= require('postcss-font-magician'),
    vars                = require('postcss-simple-vars'),

    config              = require('../config');

// load external variables for Magma CSS library
var cssVariables = require('../src/css/variables.js');

// - watch for any changes in the css folder as the build:css task only applies to main.css which relies on imports
gulp.task('watch:css', function(){
	gulp.watch([config.cssSource + '**/*.css'], ['build:css']);
});

// - build css for website
gulp.task('build:css', function() {
  return gulp.src(config.cssSource + 'main.css')
    .pipe(changed(config.cssDestination + '**/*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([
      precss(),
      vars({
        variables: cssVariables
       }),
      cssShort(),
      cssFocus(),
      pxtorem(),
      lost(),
      imageSet(),
      subpixels,
      rucksack({
      	colors: true
      }),
      flexbox(),
			magician(),
      autoprefixer(),
      cssNano()
    ]))
    .pipe(sourcemaps.write())
    .on("error", gutil.log)
    .pipe(gulp.dest(config.cssDestination));
});
