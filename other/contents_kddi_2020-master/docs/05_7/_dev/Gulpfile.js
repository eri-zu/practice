// gulp
var gulp = require('gulp');

// html
var htmlhint = require("gulp-htmlhint");

// css
var sass      = require('gulp-ruby-sass');
// css minify
var minifyCSS = require('gulp-minify-css');
// pack mediaquery
var postcss   = require('gulp-postcss');
var mqpacker  = require('css-mqpacker');

// js
// coffeescript
var coffeeScript = require('gulp-coffee');
// typescript
var typeScript   = require('gulp-typescript');
// babel
var babel        = require("gulp-babel");
// js minify
var uglify       = require('gulp-uglify');
// ベンダープレフィックスを自動で付ける

var autoprefixer = require('gulp-autoprefixer');
// ファイル結合
var concat       = require('gulp-concat');
// ファイルのリネイム
var rename       = require('gulp-rename');

// etc
var plumber     = require('gulp-plumber');
// エラーをデスクトップに表示
var notify      = require('gulp-notify');
// 画像最小化
var imagemin    = require('gulp-imagemin');
// スプライト画像生成
var sprite      = require('gulp.spritesmith');
// ブラウザ自動更新
var browserSync = require('browser-sync');



//独自タスク
// import requireDir from 'require-dir';


/**************************************
  config
	パスや設定の記述
	基本的にここしか編集しない
**************************************/
var root = '../www/htdocs/https/';
var path = {
	htmlhint: '.htmlhintrc',
	sass    : 'sass/',
	coffee  : 'cs/',
  type    : 'ts/',
  es6     : 'es6/',
	sprite  : 'sprite/',
	webpack : 'webpack/',
	html    : root,
	css     : root+'css/',
	js      : root+'js/',
	img     : root+'img/',
  proxy   : 'localhost:8101',
}
var prefixBrowsers = ['last 4 versions'];
var coffee = {
  base: [ // 出力されるファイル名
    path.coffee+'common.coffee', //共通
    path.coffee+'base.coffee',　//共通
  ],
	index: [ // 出力されるファイル名
    path.coffee+'common.coffee', //共通
    path.coffee+'base.coffee',　//共通
		path.coffee+'index.coffee'
  ],
	about: [ // 出力されるファイル名
    path.coffee+'common.coffee', //共通
    path.coffee+'base.coffee',　//共通
		path.coffee+'about.coffee'
  ],
	business: [ // 出力されるファイル名
    path.coffee+'common.coffee', //共通
    path.coffee+'base.coffee',　//共通
		path.coffee+'business.coffee'
  ],
  freshers_index: [ // 出力されるファイル名
    path.coffee+'common.coffee', //共通
		path.coffee+'freshers/slide.coffee',
    path.coffee+'freshers/line.coffee',
    path.coffee+'freshers/rect.coffee'
  ],
};
// var type = {
//   index: [
//     path.type+'index.ts'
//   ]
// };
var es6 = {
  three_common: [
    path.es6 + '3up/common.es6',
  ],
  three_index: [
    path.es6 + '3up/common.es6',
    path.es6 + '3up/index.es6',
  ],
};

/**************************************
  js sass img の圧縮タスク
**************************************/
gulp.task('min', function() {
  gulp.src([path.js+'*.js', '!'+path.js+'lib/*.js'])
    .pipe(plumber({
        errorHandler: notify.onError('Error: &lt;%= error.message %&gt;')
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.js));

  gulp.src([path.css+'*.css', '!'+path.css+'lib/*.css'])
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.css));

  gulp.src(path.img+'**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(path.img));
});

/**************************************
  sprite画像生成タスク
**************************************/
gulp.task('sprite',function() {
  var spriteOptions = {
    imgName: 'sprite.png', // スプライト画像
		imgPath: path.img+'sprite.png', // 生成される CSS テンプレートに記載されるスプライト画像パス
    cssName: '_sprite.scss', // 生成される CSS テンプレート
		padding: 10
  }
  var spriteData = gulp.src(path.sprite+'*.png')
    .pipe(sprite(spriteOptions));
  spriteData.css
    .pipe(gulp.dest(path.sass+'/base/')); // cssName で指定した CSS テンプレートの保存先
  spriteData.img
    .pipe(gulp.dest(path.img)); // imgName で指定したスプライト画像の保存先
});

/**************************************
  html コンパイルタスク
**************************************/
gulp.task('html', function() {
	gulp.src([
			root+'**/*.html',
			root+'**/*.php',
			'!'+root+'/_docs/*.html'
		])
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>;')
		}))
		.pipe(htmlhint(path.htmlhint))
		.pipe(htmlhint.reporter());
});

/**************************************
  sass コンパイルタスク
**************************************/
gulp.task('sass',function(){
  sass(path.sass,{
    style           : 'expanded',
    'sourcemap=none': true,
    compass         : true
  })
  .pipe(autoprefixer({
    browsers: prefixBrowsers
  }))
  .pipe(postcss([mqpacker()]))
  .pipe(minifyCSS())
  .pipe(gulp.dest(path.css));
});

/**************************************
  coffeeScript コンパイルタスク
**************************************/
gulp.task('coffee', function() {
	for (key in coffee) {
		val = coffee[key];
		gulp.src(val)
			.pipe(plumber({
				errorHandler: notify.onError('Error: <%= error.message %>;')
			}))
			.pipe(concat(key+'.coffee'))
			.pipe(coffeeScript())
      .pipe(uglify())
			.pipe(gulp.dest(path.js));
	}
});

/**************************************
  typeScript コンパイルタスク
**************************************/
gulp.task('type', function() {
	for (key in type) {
    var op = typeScript.createProject({
      out: key+'.js',
      target:'es5',
      removeComments: true
    });
		val = type[key];
		gulp.src(val)
			.pipe(plumber({
				errorHandler: notify.onError('Error: <%= error.message %>;')
			}))
			.pipe(concat(key+'.ts'))
			.pipe(typeScript())
      .pipe(uglify())
			.pipe(gulp.dest(path.js));
	}
});

/**************************************
  babel ES6 コンパイルタスク
**************************************/
gulp.task('es6', function() {
  for (key in es6) {
		val = es6[key];
		gulp.src(val)
			.pipe(plumber({
				errorHandler: notify.onError('Error: <%= error.message %>;')
			}))
			.pipe(concat(key+'.es6'))
			.pipe(babel({"presets": ["@babel/preset-env"]}))
      .pipe(uglify())
			.pipe(gulp.dest(path.js));
	}
});



/**************************************
	webpack コンパイルタスク
**************************************/
var minimist = require('minimist');
var webpack = require('webpack-stream');

gulp.task('webpack', ()=>{
  return  gulp
	.src('./webpack/**/*.js')
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest(root + 'assets-2020/js/' + 'unconcat/'))

});

gulp.task('bundleJS',['webpack'],()=>{
	var argv = minimist(process.argv.slice(2));
	var src = [
								root + 'assets-2020/js/' + 'unconcat/libs.js',
								root + 'assets-2020/js/' + 'unconcat/main.js',
						]
	if (argv.m==undefined) {

		gulp.src(src)
				.pipe(plumber())
				// .pipe(babel({presets: [es2015]}))
				.pipe(concat('bundle.js'))
				// .pipe(uglify({preserveComments : 'some'}))
				.pipe(rename('bundle.js')) //出力ファイル名を指定
				.pipe(gulp.dest(root + 'assets-2020/js/'))

	} else {

		gulp.src(src)
				.pipe(plumber())
				// .pipe(babel({presets: [es2015]}))
				.pipe(concat('bundle.js'))
				.pipe(strip_debug())
				.pipe(uglify({preserveComments : 'some'}))
				.pipe(gulp.dest(root + 'assets-2020/js/'))

	}

})

/**************************************
  ブラウザの更新タスク
**************************************/
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: root
		}
	});
});
gulp.task('browser-sync_y', function() {
  browserSync({
    proxy: path.proxy,
    ghostMode: {
      location: true
    }
  });
});

/**************************************
  watch　タスク
**************************************/
gulp.task('watch',function(){
  gulp.watch(path.html+'**/*.html',['html']);
	gulp.watch(path.sass+'**/*.scss',['sass']);
	gulp.watch(path.coffee+'**/*',['coffee']);
	gulp.watch(path.type+'**/*',['type']);
  gulp.watch(path.es6+'**/*',['es6']);
	gulp.watch(path.webpack+'**/*',['bundleJS']);
	gulp.watch([path.html+'**/*.html',path.html+'**/*.php'], function(event){
		gulp.src([path.html+'*.html', path.html+'**/*.php'])
      .pipe(browserSync.reload({stream: true}));
	});
	gulp.watch(path.css+'*.css', function(event){
    gulp.src([path.css+'*.css'])
      .pipe(browserSync.reload({stream: true}));
  });
});

/**************************************
  実行タスク
**************************************/
gulp.task('default', ['watch','bundleJS', 'browser-sync']);
gulp.task('y', ['watch', 'browser-sync_y']);
