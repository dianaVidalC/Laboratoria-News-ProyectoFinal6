var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserify  = require('gulp-browserify');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var browserSync = require('browser-sync').create();

var config = {
    source: './src/',
    dist: './public/'
};

var paths={
    assets:"assets/",
    html  :"**/*.html",
    sass  :"scss/**/*.scss",
    mainSass: "scss/main.scss",
    js:"assets/js",
    mainJS:"js/app.js",
    components:"js/components",
    componentsFolder: "./src/assets/js/components/",
    bootstrap:"*/bootstrap.min.js"
}

var sources={
    assets:config.source +paths.assets,
    html: config.source +paths.html,
    sass: paths.assets + paths.sass,
    rootSass: config.source + paths.assets + paths.mainSass,
    js:config.source +paths.js,
    rootJS:config.source + paths.mainJS,
    rootComponents: config.source + paths.assets + paths.components,
    bootstrapMin:config.source + paths.bootstrap
}

gulp.task('todo', () => {
    gulp.src('src/assets/js/app.js')
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('html',function() {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=>{
    gulp.src(sources.rootSass)
        .pipe(sass({
            outputStyle: "compressed"
        }).on("Error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('todo-watch',['todo'],function () {
    browserSync.reload();
    done();
})

gulp.task('sass-watch',['sass'],function () {
    browserSync.reload();
    done();
})

gulp.task('html-watch',['html'],function () {
    browserSync.reload();
    done();
})