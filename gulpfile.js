const gulp = require('gulp');

const dev = require('./config/gulpfile.dev');

const pre = require('./config/gulpfile.pre');

dev();

pre();

