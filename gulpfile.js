
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserify  = require('gulp-browserify');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');

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

gulp.task("js",function () {
    gulp.src(sources.js)
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest('./public/assets/js/'));
})

gulp.task('todo', () => {
    gulp.src([sources.bootstrapMin, paths.componentsFolder+'barraSuperior.js',paths.componentsFolder+'noticiaPrincipal.js',
        paths.componentsFolder+'noticiaSecundaria.js', sources.js+ 'app.js'])
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

/*


var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var nodemon     = require('gulp-nodemon');

var config = {
    source: './src/',
    dist: './public'
};

var paths = {
    assets: "/assets/",
    img: "assets/img/!*.png",
    js: "assets/js/",
    bootstrapJs: "assets/scss/js/bootstrap.min.js",
    html: "**!/!*.html",

    bootstrapSass: "scss/_bootstrap.scss",
    components: "./src/assets/js/components/",
    icons: "icomoon/!**!/!*"
};

var sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    bootstrapJs: config.source + paths.bootstrapJs,
    img: config.source + paths.img,

    js: config.source + paths.js,

    rootBootstrap: config.source + paths.assets + paths.bootstrapSass,
    rootComponents: config.source + paths.assets + paths.components,
    icons: config.source + paths.assets + paths.icons
};


gulp.task('all', () => {
    gulp.src([sources.bootstrapJs, paths.components+'barraSuperior.js',paths.components+'noticiaPrincipal',
        paths.components+'noticiaSecundaria'])
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('html', ()=>{
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('bootstrap-js', ()=>{
    gulp.src(sources.bootstrapJs).pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('img', ()=>{
    gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('icons', ()=>{
    gulp.src(sources.icons).pipe(gulp.dest(config.dist + paths.assets + "icomoon"));
});



gulp.task('bootstrap', ()=>{
    gulp.src(sources.rootBootstrap)
        .pipe(sass({
            outputStyle: "compressed"
        }).on("Error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("sass-watch", ["sass"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("bootstrap-watch", ["bootstrap"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("html-watch", ["html"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("all-watch", ["all"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('push', ['html', 'bootstrap-js', 'img', 'sass', 'bootstrap']);
/!*gulp.task("serve", () => {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });*!/

/!*gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000", // port of node server
    });
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});*!/
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.rootSass, ["sass-watch"]);
    gulp.watch(sources.rootBootstrap, ["bootstrap-watch"]);
    gulp.watch(['./src/assets/js/components/!*.js', sources.js + 'app.js'], ["all-watch"]);
*/
