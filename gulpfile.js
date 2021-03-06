const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
 
gulp.task('es6_2_es5', () => {
   return gulp.src('src/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['es6_2_es5']);
});

gulp.task('default', ['watch', 'es6_2_es5'])
