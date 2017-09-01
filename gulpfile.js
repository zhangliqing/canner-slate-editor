const gulp = require('gulp');
const s3 = require("gulp-s3");
const gzip = require("gulp-gzip");
const {version} = require('./package.json');
const extend = require("lodash/extend");
const option = {
  headers: {
    'x-amz-acl': 'public-read'
  },
  gzippedOnly: true
};
const awsCredentials = function() {
  return {
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: "static.canner.io",
    region: 'ap-northeast-1'
  };
};


gulp.task('default', function() {
  gulp.src('./src/**/*.scss')
    .pipe(gulp.dest('./lib'));
});

gulp.task("deploy", function() {
  var _opt = extend(option, {
    uploadPath: "/qa-editor/" + version + '/'
  });

  return gulp.src("./docs/external/index.js")
      .pipe(gzip())
      .pipe(s3(awsCredentials(), _opt));
});