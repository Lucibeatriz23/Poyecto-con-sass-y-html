//function tarea(done) {
//  console.log("primer tarea");
//  done();
//}

//exports.primertarea = tarea;

const { watch } = require("chokidar");
const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {

    src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("build/css"))

    done();
}

function dev(done) {
    watch("src/scss/app.scss", css);
    done();
}
exports.css = css;
exports.dev = dev;