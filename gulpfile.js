/**
 * Created by user on 10.01.18.
 */
var gulp = require ('gulp');

//Include plugins
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

//Lint Task

gulp.task('lint', function () {
   return gulp.src('js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

//Compile Our Sass
gulp.task('sass', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

//Concate & minify Js
gulp.task('scripts', function(){
   return gulp.src('js/*.js')
       .pipe(concat('all.js'))
       .pipe(gulp.dest('dist/js'))
       .pipe(rename('all.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'));
});

//Watch Files For Chfnges
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
})

//Default Task

gulp.task('default',['lint', 'sass', 'scripts', 'watch']);