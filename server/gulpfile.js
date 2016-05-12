var gulp = require ('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'public/*/js/*.js'];

gulp.task('style', function () {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }));
});

gulp.task('inject', function () {
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');

  var injectSrc = gulp.src(['./public/books/css/*.css', './public/books/js/*.js'], {read: false});

  var injectOptions = {
      addRootSlash: false,
      ignorePath: '/public/books'
  };

  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/books/lib',
    ignorePath: '../../public/books'
  };

  return gulp.src('./public/books/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./public/books'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
      script:'server.js',
      delayTImer: 1,
      env: {
        'PORT': 3000
      },
      watch: jsFiles
    };

    return nodemon(options)
          .on('restart', function(ev) {
              console.log('Restarting ....');
          });
});
