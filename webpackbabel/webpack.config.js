module.exports = {
  // 吐き出しモード
  mode: "development",
  // エントリーポイント
  entry: "./src/index.js",
  // 出力
  output: {
    // 出力フォルダ
    path: `${__dirname}/dist`, // ルート/distに出力
    // 出力ファイル名
    filename: "bundle.js",
  },
  // ローカルサーバー
  devServer: {
    static: "dist",
    // ブラウザが自動的にlocalhostを開く
    open: true,
  },
};
