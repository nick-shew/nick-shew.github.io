var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src("./prod/**/*")
      .pipe(deploy({ 
        remoteUrl: "https://github.com/nick-shew/nick-shew.github.io.git",
        branch: "master"
      }))
  });

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', gulp.series(function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
}));

// Move the javascript files into our /src/js folder
gulp.task('js', gulp.series(function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 
    'node_modules/jquery/dist/jquery.min.js', 
    'node_modules/popper.js/dist/popper.min.js', 
    'node_modules/animejs/lib/anime.min.js',
    'node_modules/@fortawesome/fontawesome-free/js/all.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}));

// Move the sprite files into our /src/sprites folder
gulp.task('sprites', gulp.series(function () {
    return gulp.src(['node_modules/@fortawesome/fontawesome-free/sprites/solid.svg'])
        .pipe(gulp.dest("src/sprites"))
        .pipe(browserSync.stream());
}));

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function () {
    browserSync.init({
        server: "./src"
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss', 'src/scss/*.scss'], gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('js', 'sprites', 'serve'));