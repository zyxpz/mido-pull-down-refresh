const SRC_DIR = './src/';
const DEV_DIR = './dev/';
const DIST_DIR = './dist/';
const DEMO_DIR = './demo';

module.exports = {
  src: SRC_DIR,
  dev: DEV_DIR,
  dist: DIST_DIR,
  demo: DEMO_DIR,
  html: {
    src: `${SRC_DIR}/*.html`,
    dev: `${DEV_DIR}/*.html`,
    dist: `${DIST_DIR}/*.html`,
    demo: `${DEMO_DIR}/*.html`,
  },
  js: {
    src: `${SRC_DIR}/*.ts`,
    buildSrc: `${SRC_DIR}/pulldown.js`,
    dev: `${DEV_DIR}/*.js`,
    dist: `${DIST_DIR}/*.js`,
    demo: `${DEMO_DIR}/*.js`,
  },
  css: {
    src: `${SRC_DIR}/*.css`,
    srcLess: `${SRC_DIR}/*.less`,
    dev: `${DEV_DIR}/*.css`,
    dist: `${DIST_DIR}/*.css`,
    demo: `${DEMO_DIR}/*.less`,
  },
  ts: {
    src: `${SRC_DIR}/*.ts`
  }
};