const { src, dest, series, watch, parallel } = require("gulp");
const postcss = require("gulp-postcss");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const prettyHtml = require("gulp-pretty-html");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const prettier = require("gulp-prettier");
var tailwindcss = require("tailwindcss");
const svgo = require("gulp-svgo");

const html = () => {
  return src("src/**.html")
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(prettyHtml())
    .pipe(dest("dist"))
    .pipe(sync.stream());
};

const serve = () => {
  sync.init({
    server: "./dist",
  });
};

const clear = () => {
  return del("./dist");
};

const format = () => {
  return src("src/**/*.js")
    .pipe(prettier({ singleQuote: true }))
    .pipe(dest("dist"));
};
const css = () => {
  return src("src/css/**.css")
    .pipe(
      postcss([tailwindcss("./tailwind.config.js"), require("autoprefixer")])
    )
    .pipe(csso())
    .pipe(dest("dist/css"))
    .pipe(sync.stream());
}
const svg = () => {
  return src("src/images/*").pipe(svgo()).pipe(dest("dist/images"));
};


const watcher = () => {
  watch("src/*.html", parallel(html, css));
  watch("src/parts/*.html", parallel(css,html));
  watch("src/**/*.html", css);
  watch("src/**/*.css", css);
  watch("src/**/*.js", format);
  watch("src/**/*.svg", svg);
};

exports.watch = watcher;
exports.html = html;
exports.clear = clear;
exports.dev = series(
  clear,
  parallel(format, svg, html, css),
  parallel(watcher, serve)
);
