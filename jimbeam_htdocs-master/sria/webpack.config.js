module.exports = {
  mode: 'production',
  entry: {
    'talk/talkhigh/assets/js/app': ['./app/src/js/talkhigh.js'],
    'talk/talkgaya/assets/js/app': ['./app/src/js/talkgaya.js'],
    'warikan/smart/assets/js/app': ['./app/src/js/warikan_smart.js'],
    'warikan/roulette/assets/js/app': ['./app/src/js/warikan_roulette.js'],
    'next/assets/js/app': ['./app/src/js/next.js']
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/,/\.es6$/,/\.json$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
