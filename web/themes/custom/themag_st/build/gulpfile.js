/**
 * @file
 * Gulp Tasks
 */

const { src, dest, series, parallel, watch} = require("gulp");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

// Variables
// ------------------------------.
var vendor = '../../themag/themes/charm/vendor' ,
  themag = '../../themag/_src/',
  assets = '../assets',
  source = '../_src';

var config = {
  'scss': {
    'src': source + '/scss/**/*.scss',
    'watchDir': source + '/scss/**/*.*',
    'includePath': [vendor, themag],
    'sourcemaps': 'sourcemaps',
    'dest': assets + '/css'
  }
};

function scss() {
  sass.compiler = require('node-sass');
  return src(config.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: config.scss.includePath
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 11'))
    .pipe(sourcemaps.write(config.scss.sourcemaps))
    .pipe(dest(config.scss.dest));
}

function scssCompressed() {
  sass.compiler = require('node-sass');
  return src(config.scss.src)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [config.scss.includePath]
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 11'))
    .pipe(dest(config.scss.dest));
}

function watcher() {
  watch([config.scss.src], scssCompressed);
}

exports.scss = scss;
exports.scssCompressed = scssCompressed;
exports.watcher = watcher;
exports.default = watcher;
