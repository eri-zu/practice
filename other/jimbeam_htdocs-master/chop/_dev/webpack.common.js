const path = require('path');
const webpack = require('webpack');
const pathConfig = require('./path_config.js');

const config = {
  entry: {
    app: pathConfig.srcPath + pathConfig.assetsPath + 'js/app.js',
    // app2: './src/assets/js/app2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'htdocs/js'),  // gulpfile.jsのjs.outputが優先
  },
  // externals: {
  //   jquery: 'jQuery',
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module){
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
      // chunks: ['app'],
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      }],
    }, {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options : {
          fix : true
      }
    }],
  },
};

module.exports = config;
