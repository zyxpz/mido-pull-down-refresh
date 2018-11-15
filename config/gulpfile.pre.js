const gulp = require('gulp');

const $ = require('gulp-load-plugins')();

const config = require('./path');

const pre = () => {

  gulp.task('clean', () => 
    gulp.src(config.dist)
    .pipe($.clean({
      force: true
    }))
  );

  gulp.task('js', () => 
    gulp.src(config.js.src)
    .pipe($.babel())
    .pipe($.uglify())
    .pipe(gulp.dest(config.dist))
  );

  gulp.task('build', ['clean'], () => {
    gulp.run('js');
  });
};

module.exports = pre;