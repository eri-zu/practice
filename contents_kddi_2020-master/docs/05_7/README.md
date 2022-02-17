# frontendDevelopment  
フロントエンド開発のテンプレート  
  
## Feature  
*HTMLHint  
*SASS  
*autoprefixer  
*coffeeScript  
*typeScript  
*css,jsのminify  
*画像の圧縮  
*スプライト画像の生成  
  
  
## フォルダ構成  
/_dev  
┣ Gulpfiles.js - gulpファイル  
┣ package.json - npmパッケージ設定ファイル  
┣ .htmlhintrc  - htmlhint設定ファイル  
┣ /cs          - coffeeScript  
┣ /ts          - typeScript  
┣ /sass        - sass  
┣ /sprite      - sprite元画像  
  
/htdocs  
┣ /_inc - 読み込み用フォルダ  
┣ /img  - 画像フォルダ  
┣ /js   - jsフォルダ  
┣ /css  - cssフォルダ  
  
  
## how to use  
### ファイル監視（sass, coffeeScript, typeScript, html）  
gulp  
  
### css,jsのminify, 画像圧縮  
gulp min  
  
### スプライト画像生成  
gulp sprite  
/htdocs/img に画像生成  
/_dev/sass/base/ にsassが生成  
  
  