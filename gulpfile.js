/**
 * Created by user on 10.01.18.
 */
const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")

gulp.task("sass:watch", () => watchSass([
    "./public/**/*.{scss,css}",
    "!./public/libs/**/*"
])
    .pipe(sass())
    .pipe(gulp.dest("./public")));