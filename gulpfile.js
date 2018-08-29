const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync');
const server = browserSync.create();

const reload = done => {
  server.reload();
  done();
};

const serve = done => {
  server.init({
    server: {
      baseDir: './'
    }
  });
  done();
};

const paths = {
  html: {
    src: ['**/*.html','!node_modules/']
  },
  css: {
    src: 'scss/*.scss',
    dest: 'css'
  },
  js: {
    src: 'js/*.js'
  }
};

const css = () => {
  return src(paths.css.src)
    //.pipe(sourcemaps.init())
    .pipe(sass())
    //.pipe(sourcemaps.write())
    .pipe(dest(paths.css.dest));
};

const watchHTML = () => {
  return watch(paths.html.src, reload);
};

const watchCSS = () => {
  return watch(paths.css.src, series(css, reload));
};

const watchJS = () => {
  return watch(paths.js.src, reload);
};

const dev = series(serve, parallel(watchHTML, watchCSS, watchJS));
exports.default = dev;

