'use strict';

// common modules
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const conf = require('../config');

// scss modules
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const cssWring = require('csswring');

// options
const autoprefixerOption = {
  grid : true
};

const postcssOption = [
  flexBugsFixes,
  autoprefixer(autoprefixerOption),
  cssWring
];

// task
gulp.task('sass', function(){
  const src = conf.src + conf.sass.src;
  const dest = conf.dest + conf.sass.dest;
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass())
    .pipe(postcss(postcssOption))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});
