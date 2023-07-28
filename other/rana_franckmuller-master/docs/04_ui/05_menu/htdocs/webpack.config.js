const MODE = 'development';
const enabledSourceMap = (MODE === 'development');
const webpack = require('webpack');
module.exports = {
  mode:'development',
  entry:'./src/js/main.es6',
  output:{
    path:__dirname+'/dist/assets/js',
    filename:'app.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  module: {
      rules: [
        {
          test: /\.es6$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', {'modules': false}]
                ]
              }
            }
          ],
          exclude: /node_modules/,
        },
        {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader'
      }


    ],
    }

};
