//this task is completely optional and will only work if you have signed up
//with the Surge static publishing service
//check it out at https://surge.sh/

var gulp = require('gulp')
var surge = require('gulp-surge')

gulp.task('deploy', [], function () {
  return surge({
    project: './build',         // Path to your static build directory
    domain: 'chilly-month.surge.sh'  // Your domain or Surge subdomain
  })
})
