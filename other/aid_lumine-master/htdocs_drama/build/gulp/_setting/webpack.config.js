const path = require('path');
const PATH = require('./config');
const minimist = require('minimist');
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var argv = minimist(process.argv.slice(2));
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

  var setting = {
      entry: {
        "main": PATH.src.js + "src/Main.es6",
        // "main": "../../dev/assets/devjs/src/es6/main.js",
        // "page01": PATH.dev.devjs + "src/Page01.js",
      },
      output: {
          // path: "../../dev/assets/js/",
          // filename: "[name].js"
          filename: "main.js"
      },
      module: {
          // loaders: [
          rules: [
              {
                test: [/\.js$/,/\.es6$/,/\.json$/],
                exclude: /(node_modules|bower_components)/,
                include: [
                  path.resolve(PATH.src.js + 'src/')
                ],
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                  cacheDirectory: true,
                  presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
                },
              },
              {type: 'javascript/auto', test: /\.json$/, exclude: /(node_modules|bower_components)/, loaders: ['json-loader', 'strip-json-comments-loader']},
              {test: /\.(glsl|frag|vert|vs|fs)$/, exclude: /(node_modules|bower_components)/, loader: 'glslify-import-loader'},
              {test: /\.(glsl|frag|vert|vs|fs)$/, exclude: /(node_modules|bower_components)/, loader: 'raw-loader'},
              {test: /\.(glsl|frag|vert|vs|fs)$/, exclude: /(node_modules|bower_components)/, loader: 'glslify-loader' },
          ]
      },
      cache: true,
      devtool: 'source-map',
      // devtool: 'inline-source-map',
      resolve: { 
        // root: [ 
        modules: [ 
          path.resolve(PATH.src.js + 'src/'),
          path.join(__dirname+'/..', 'node_modules')
         ]
       },
      resolveLoader: {
        // root: path.join(__dirname+'/..', 'node_modules')
        modules: [
          path.resolve(PATH.src.js + 'src/'),
          path.join(__dirname+'/..', 'node_modules')
        ]
      },
      plugins: [
        new HardSourceWebpackPlugin(),
      ],
      optimization: {
        // minimizer: [
        //    new UglifyJsPlugin({
        //        uglifyOptions: {
        //            output: {comments: false},
        //            minify: {},
        //            compress: {
        //                booleans: true,
        //                //...
        //            }
        //        }
        //    }),
        // ]
      },
      // mode: "production",
      mode: "development",
  };

  // source mapを出力しない
  if (argv.m==true) {setting.devtool = false;}
  console.log(setting.devtool);

  module.exports = setting;