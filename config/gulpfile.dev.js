const gulp = require('gulp');

const $ = require('gulp-load-plugins')();

const open = require('open');

const config = require('./path');

const dev = () => {

  gulp.task('clean:dev', () => {
    return gulp.src(config.dev)
      .pipe($.clean({
        force: true
      }));
  });

  gulp.task('html:dev', () =>
    gulp.src(config.html.src)
    .pipe(gulp.dest(config.dev))
    .pipe($.connect.reload())
  );

  gulp.task('css:dev', () =>
    gulp.src(config.css.srcLess)
    .pipe($.less())
    .pipe($.autoprefixer({
      browseers: ['last 2 versions', 'Firefox>=20', 'last 2 Explorer versions', 'last 3 Safari versions'],
      cascade: true
    }))
    .pipe(gulp.dest(config.dev))
    .pipe($.connect.reload())
  );

  gulp.task('js:dev', () =>
    gulp.src(config.js.src)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .on('error', (err) => {
      $.util.log($.util.colors.red('[Error]'), err.toString());
    })
    .pipe($.browserify({
      insertGlobals: !gulp.env.production,
      debug: true
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.dev))
    .pipe($.connect.reload())
  );

  gulp.task('dev:server', ['html:dev', 'css:dev', 'js:dev'], () => {
    $.connect.server({
      root: config.dev,
      port: 8989,
      livereload: true
    });
    gulp.watch(config.html.src, ['html:dev']);
    gulp.watch(config.css.src, ['css:dev']);
    gulp.watch(config.js.src, ['js:dev']);

  });

  gulp.task('dev', ['clean:dev'], () => {
    gulp.run('dev:server');
  });

  // process.on('exit', (code) => {
  //   if (code === 0) {
  //     gulp.run('clean:dev')
  //   }
  // })

};

module.exports = dev;