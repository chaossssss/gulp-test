var gulp = require('gulp');
    // less = require('gulp-less'),
    // livereload = require('gulp-livereload');
var $ = require('gulp-load-plugins')();

gulp.task('less',function(){
  gulp.src('less/*.less')
    .pipe($.less())
    .pipe(gulp.dest('build/css'))
});


gulp.task('watch',function(){
  gulp.watch('less/*.less', ['less']);
})


gulp.task('default',['watch']);