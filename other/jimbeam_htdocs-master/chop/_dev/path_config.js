const config = {
  rootPath: './',
  srcPath: './src/',
  distPath: '../../public/',
  lowerPath: 'tap/', //相対 ex) "test/,
}

config.assetsPath = config.lowerPath + 'assets/';
config.devDistPath = config.srcPath + '.tmp/';


module.exports = config;
