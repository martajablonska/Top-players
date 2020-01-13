const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

const server = function(cb) {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false,
        open: true, 
    });

    cb();
}

const css = function () {   
    return gulp.src("src/scss/style.scss")
        .pipe(
            sass({
                outputStyle: "extended"
            }).on("error", sass.logError)
        )
        .pipe(autoprefixer({
            browsers: [
                "last 1 version",
                "> 1%"]
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream({match: "**/*.css"}));
}

const watch = function() {
    gulp.watch("src/scss/**/*.scss", gulp.series(css));
    gulp.watch("dist/index.html").on("change", browserSync.reload);
}

exports.default = gulp.series(css, server, watch);
exports.css = css;
exports.watch = watch;