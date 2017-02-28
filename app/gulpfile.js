var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    plumber = require('gulp-plumber')
    browsersync = require('browser-sync')
    reload = browsersync.reload;

gulp.task('scripts', function() {
  return gulp.src(['./js/**/*.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dest/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'));
});

gulp.task('html', function(){
    gulp.src('./**/*.html')
    .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function(){
    browsersync({
        server:{
            baseDir:"./"
        }
    });
})

gulp.task('watch', function(){
    gulp.watch('./js/**/*.js', ['scripts']);
    gulp.watch('./js/**/*.html', ['html']);
});

gulp.task('default', ['scripts', 'html', 'browser-sync','watch']);