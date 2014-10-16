var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var del = require('del');

var PATHS = {
  JS: './js/**/*.js',
  SASS: 'styles/*.sass'
};


gulp.task('clean', function(done) {
  del(['build'], done);
});

gulp.task('build-css', function() {
  return gulp.src(PATHS.SASS)
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('build-js', function () {
  return gulp.src(['js/main.js'])
    .pipe(concat('bundle.js'))
    .pipe(browserify({
      transform: ['reactify']
    })).on('prebundle', function(bundler) {
      bundler.require('react');
    })
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('styles/*.sass', ['build-css']);
  gulp.watch('./js/**/*.js', ['build-js']);
});

gulp.task('default', ['watch'], function() {
  console.warn('GULP ACTIVE! Watching files');
})
;
