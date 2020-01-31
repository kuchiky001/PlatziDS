var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

//npm install gulp --save --only=dev
gulp.task('hello', function() {
  console.log('Hello!!!!');
});

//npm install gulp-sass
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/stylesheets'))
});

//npm install gulp-concat
gulp.task('style_min', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('style_main.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
});

//npm install gulp-minify-scss
gulp.task('style_min', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('style_main_'+version.version+'.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
});


gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});
