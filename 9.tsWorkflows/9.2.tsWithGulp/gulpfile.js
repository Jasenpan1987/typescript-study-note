var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function(){
    return tsProject.src() // src passed from tsconfig.json
        .pipe(ts(tsProject)) // compile all the files in tsconfig
        .pipe(gulp.dest("")); // root dir
});

gulp.task("watch", function(){
    gulp.watch("*.ts", ["typescript"]);
});

gulp.task("default", ["watch"]);