const gulp = require('gulp');

const $ = require('gulp-load-plugins')();

const browserify = require('browserify');

const tsify = require('tsify'); // Browserify的一个插件访问typescript编译器

const source = require('vinyl-source-stream');

const buffer = require('vinyl-buffer');

const config = require('./path');

const pre = () => {

  gulp.task('clean', () =>
    gulp.src(config.dist)
    .pipe($.clean({
      force: true
    }))
  );

  gulp.task('js', () =>
    // gulp.src(config.js.buildSrc)
    // .pipe($.babel())
    // .pipe($.uglify())
    // .pipe(gulp.dest(config.dist))
    browserify({
      entries: ['./src/pulldown.ts'], // 入口
      debug: false,
      extensions: ['.ts']
    })
    .plugin(tsify)
    .transform('babelify') // babel
    .bundle()
    .pipe(source('pulldown.js'))
    .pipe(buffer())
    .pipe($.streamify($.uglify())) // 压缩
    .pipe(gulp.dest(config.dist))
  );

  gulp.task('build', ['clean'], () => {
    gulp.run('js');
  });
};

module.exports = pre;