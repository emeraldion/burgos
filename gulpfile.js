var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserify = require('gulp-browserify');

gulp.task('default', ['sass', 'jsmin']);

gulp.task('sass', function() {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('jsmin', function() {
  // TODO:
});
