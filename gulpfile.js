var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('default', function() {
  // place code for your default task here
  var examplePath  = '_site/examples/';
  return gulp.src(['_site/examples/**'], {base: "./_site"})
        .pipe(zip('examples.zip'))
        .pipe(gulp.dest(''));
});
