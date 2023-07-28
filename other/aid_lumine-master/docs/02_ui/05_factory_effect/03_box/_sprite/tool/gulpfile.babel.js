import gulp from "gulp";
import spritesmith from 'gulp.spritesmith';
import PATH from './_setting/config';
 
gulp.task('sprite', function () {

    var len = 13;
    var cb = (index)=>{

        var spriteData = gulp.src('../assets/resource/img/sprite'+index+'/**/*.png') // スプライトにする画像(png)
                           .pipe(spritesmith({
                                imgName: 'sprite'+index+'.png', // 生成するスプライト画像の名前
                                cssName: '_sprite'+index+'.scss', // 生成するsassの名前
                                imgPath: '../resource/img/sprite.png', // sassに記載されるスプライト画像のパス
                                cssFormat: 'scss', // 生成するCSSのフォーマット
                                cssVarMap: function (sprite) {
                                  sprite.name = 'sprite-' + sprite.name; // sassで使用する変数名
                                },
                                algorithm: 'left-right',
                                algorithmOpts: {sort: false}
                            }));

        spriteData.img.pipe(gulp.dest('../assets/resource/out/')); // 生成するスプライト画像の保存場所
        spriteData.css.pipe(gulp.dest('../assets/resource/spriteScss/')); // 生成するsassの保存場所

    }

    for (var i = 0; i < len; i++) {
        cb(i+1);
    }

});