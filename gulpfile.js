const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const flatten = require('gulp-flatten');

gulp.task('html', function () {
  return gulp.src(['src/*.html', 'src/admin/*.html', 'src/researcher/*.html', 'src/committee/*.html', 'src/auth/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(flatten({ includeParents: 1 }))
    .pipe(gulp.dest('dist'));
});


// Task to process CSS files
gulp.task('css', function () {
    return gulp.src('src/css/*.css')
      .pipe(gulp.dest('dist/css'));
  });
  
  // Task to process JS files
  gulp.task('js', function () {
    return gulp.src('src/js/*.js')
      .pipe(gulp.dest('dist/js'));
  });
  
  // Task to watch for changes in files
  gulp.task('watch', function () {
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/css/*.css', gulp.series('css'));
    gulp.watch('src/js/*.js', gulp.series('js'));
  });
  
  // Default task to run all tasks
  gulp.task('default', gulp.parallel('html', 'css', 'js', 'watch'));