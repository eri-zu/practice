'use strict';

// モジュール読み込み
const gulp = require('gulp');
const conf = require('../config');

gulp.task('copy', (done) => {
  const src = conf.src;
  const dest = conf.dest;
  // Talkhigh JSON
  gulp.src(src + '/json/talk/talkhigh/theme.json')
    .pipe(gulp.dest(dest + '/talk/talkhigh/assets/json/')
  );
  // Talkhigh MP3
  gulp.src(src + '/sounds/talk/talkhigh/*.mp3')
    .pipe(gulp.dest(dest + '/talk/talkhigh/assets/sounds/')
  );
  // Talkgaya MP3
  gulp.src(src + '/sounds/talk/talkgaya/**/*.mp3')
    .pipe(gulp.dest(dest + '/talk/talkgaya/assets/sounds/')
  );
  // スマート割り勘 MP3
  gulp.src(src + '/sounds/warikan/smart/*.mp3')
    .pipe(gulp.dest(dest + '/warikan/smart/assets/sounds/')
  );
  // 割り勘ルーレット MP3
  gulp.src(src + '/sounds/warikan/roulette/*.mp3')
    .pipe(gulp.dest(dest + '/warikan/roulette/assets/sounds/')
  );
  // 割り勘ルーレット JSON
  gulp.src(src + '/json/warikan/roulette/targets.json')
    .pipe(gulp.dest(dest + '/warikan/roulette/assets/json/')
  );
  // NEXT!ジムビーム
  gulp.src(src + '/sounds/next/*.mp3')
    .pipe(gulp.dest(dest + '/next/assets/sounds/')
  );
  done();
  // 共通ファイル
  // gulp.src(src + '/common/**/*')
  //   .pipe(gulp.dest(dest + '/assets/')
  // );
  // done();
});
