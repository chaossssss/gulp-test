var gulp = require('gulp');
    // less = require('gulp-less'),
    // livereload = require('gulp-livereload');
var $ = require('gulp-load-plugins')();
var filter = require('gulp-filter');
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
    .pipe(filter('**/*.css'))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('js',function(){
  return gulp.src(['js/*.js','js/*.min.js'])
    // .pipe($.browserify())
    .pipe($.uglify())
    .pipe(gulp.dest('app/js'))
})
gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('clean', function() {
  return gulp.src( ['app/css','app/js'], {read: false} ) 
    .pipe($.clean());
});

// gulp.task('browser-sync',function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     }
//   });
// });



gulp.task('watch', ['sass','less','js'],function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('less/*.less', ['less']);
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch("js/*.js", ['js-watch']);
  gulp.watch('*.html').on('change',reload);
})


gulp.task('default',['watch']);