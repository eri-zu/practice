import gulp from "gulp";
import spritesmith from 'gulp.spritesmith';
import PATH from '../../_setting/config';
 
gulp.task('sprite', function () {

    var spriteData = gulp.src('../assets/img/sprite/*.png') // スプライトにする画像(png)
                       .pipe(spritesmith({
                            imgName: 'sprite.png', // 生成するスプライト画像の名前
                            cssName: '_sprite.scss', // 生成するsassの名前
                            imgPath: '../assets/img/sprite.png', // sassに記載されるスプライト画像のパス
                            cssFormat: 'scss', // 生成するCSSのフォーマット
                            cssVarMap: function (sprite) {
                              sprite.name = 'sprite-' + sprite.name; // sassで使用する変数名
                            }
                        }));

    spriteData.img.pipe(gulp.dest('../assets/img/')); // 生成するスプライト画像の保存場所
    spriteData.css.pipe(gulp.dest('../scss/')); // 生成するsassの保存場所

});