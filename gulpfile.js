const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const sass = gulpsass(require('sass'));

// gulp.task('sass', async function () {
//     gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
// })
gulp.task('wach', async function () {
    gulp.watch("src/components/**/*.scss", async function () {
        gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
    })
})
