import gulp from "gulp";
import plumber from "gulp-plumber";
import concat from 'gulp-concat';
import PATH from '../../_setting/config';

// ------------------------------------------------------------
//  library
// ------------------------------------------------------------
gulp.task('concatJSLibs', ()=>{

    var src = [
                PATH.src.js + 'libs/util/Stats.js',

                PATH.src.js + 'libs/jquery/jquery.min.js',
                PATH.src.js + 'libs/jquery/jquery.throttle-debounce.min.js',

                PATH.src.js + 'libs/canvas/3D/three.js',
                PATH.src.js + 'libs/canvas/3D/TrackballControls.js',
                // PATH.src.js + 'libs/canvas/3D/font/**/*.js',
                PATH.src.js + 'libs/canvas/3D/postprocessing/EffectComposer.js',

                PATH.src.js + 'libs/tween/TweenMax.min.js',
                PATH.src.js + 'libs/tween/DrawSVGPlugin.min.js',
              ]

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        // .pipe(gulp.dest(PATH.dist.js));
        // .pipe(gulp.dest(PATH.dist.js + 'common/'));
        .pipe(gulp.dest(PATH.dist.js + 'unconcat/'));

});