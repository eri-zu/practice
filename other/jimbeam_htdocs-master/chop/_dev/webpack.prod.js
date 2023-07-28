const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = {
  watch: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // remove warnings
        warnings: false,
        // Drop console statements
        drop_console: true
      },
    }),
  ],
};

module.exports = merge(common, config);
