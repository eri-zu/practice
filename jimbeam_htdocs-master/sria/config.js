module.exports = {
  // for developement
  src: './app/src',
  // for production
  dest: '../public',
  // pug
  pug: {
    src: '/pug/**/*.pug',
    exclude: '/pug/**/_*.pug',
    dest: '/'
  },
  // sass
  sass: {
    src: '/scss/**/*.scss',
    dest: '/'
  },
  //babel
  babel: {
    src: '/js/**/*.js',
    dest: '/'
  },
  //imagemin
  imagemin: {
    src: '/images/**/*',
    dest: '/'
  }
};
