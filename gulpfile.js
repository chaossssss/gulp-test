var gulp = require('gulp');
    // less = require('gulp-less'),
    // livereload = require('gulp-livereload');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;



gulp.task('less',function(){
  gulp.src('less/*.less')
    .pipe($.less())
    .pipe(gulp.dest('build/css'))
});
gulp.task('sass',function() {
  return gulp.src('scss/*.scss')
    .pipe($.sass())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});


// gulp.task('browser-sync',function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     }
//   });
// });



gulp.task('watch', ['sass','less'],function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('less/*.less', ['less']);
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('*.html').on('change',reload);
})


gulp.task('default',['watch']);