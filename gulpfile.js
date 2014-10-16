var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    react = require('gulp-react');

gulp.task('build-css', function() {
  return gulp.src('styles/*.sass')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

gulp.task('build-js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(react())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('styles/*.sass', ['build-css']);
  gulp.watch('./js/**/*.js', ['build-js']);
});

gulp.task('default', ['watch'], function() {
})
;

