var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass',function(){
	gulp.src(config.src)
  .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(
		config.prefixer
	))
  .pipe(sourcemaps.write(config.maps))
	.pipe(gulp.dest(config.dest))
});
