const SRC_DIR = './src/';
const DEV_DIR = './dev/';
const DIST_DIR = './dist/';

module.exports = {
  src: SRC_DIR,
  dev: DEV_DIR,
  dist: DIST_DIR,
  html: {
    src: `${SRC_DIR}/*.html`,
    dev: `${DEV_DIR}/*.html`,
    dist: `${DIST_DIR}/*.html`,
  },
  js: {
    src: `${SRC_DIR}/*.js`,
    buildSrc: `${SRC_DIR}/pulldown.js`,
    dev: `${DEV_DIR}/*.js`,
    dist: `${DIST_DIR}/*.js`,
  },
  css: {
    src: `${SRC_DIR}/*.css`,
    srcLess: `${SRC_DIR}/*.less`,
    dev: `${DEV_DIR}/*.css`,
    dist: `${DIST_DIR}/*.css`,
  },
  ts: {
    src: `${SRC_DIR}/*.ts`
  }
};