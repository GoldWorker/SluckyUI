var gulp = require('gulp');
// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
// var jsdoc = require('gulp-jsdoc3');
//doc
// var GJSDuck = require("gulp-jsduck");

// DEBUG=jsdoc;

var reply = function(someone, content) {
    console.log('\n' + someone + '\n\t' + content + '\n');
}
var e_reply = reply.bind(this, '小e：');

// gulp.task("doc", function()
// {
//     var gjsduck = new GJSDuck(["--out", "docs"]);
//     gulp.src("./app/**/**.js")
//         .pipe(GJSDuck.doc());
// });

gulp.task('browser', ['sass'], function() {
    e_reply('看看有什么动静-。-');

    var files = [
        './app/**/*.html',
        './app/**/*.css',
        './app/**/*.png',
        './app/**/*.js',
        './app/**/*.scss'
    ];

    browserSync.init(files, {
        server: {
            baseDir: ['app'], //根目录与项目目录
            directory: true,
            // index: 'main_page.html'
        },
        port: 80
    });
    gulp.watch("./app/sass/**/*.scss", ['sass']);
    // gulp.watch("app/*.html").on('change', reload);
});


// 检查脚本
gulp.task('lint', function() {
    e_reply('正在检查js，喝口水，放松放松。。。');

    gulp.src('./app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('sass', function() {
    // src 可传入数组对象，各个匹配字符串
    e_reply('正在编译sass');

    gulp.src('./app/sass/*.scss')
        .pipe(sass({
            // outputStyle: 'compressed',
            loadPath: './app/sass/**'
        }))
        .on('error', sass.logError)
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('less', function() {
    gulp.src('./app/less/*.less')
        // .pipe(sourcemaps.init())
        .pipe(less())
        // .on('error', less.logError)
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'));
});

// 合并并压缩文件
gulp.task('scripts', function() {
    e_reply('正在努力合并压缩中');

    gulp.src('./app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

var _DIR_ = './app/weChat/js';

gulp.task('doc', function(cb) {
    e_reply('正在努力生成中');
    var config = require('./jsdoc.json');
    gulp.src(['README.md', _DIR_ + '/all/all.js'], { read: false })
        .pipe(jsdoc(config, cb));
});

//合并
gulp.task('jsconcat', function() {
    e_reply('正在努力合并中');

    gulp.src(_DIR_ + '/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest(_DIR_ + '/all'));
});

gulp.task('mkdocing', function() {
    e_reply('让我看看哪里改变了，喝口茶，放松放松。。。');
    // 监听文件变化
    gulp.watch([_DIR_ + '/*.js'], function() {
        gulp.run('jsconcat', 'doc');
    });
});


// 默认任务
gulp.task('default', function() {
    e_reply('让我看看哪里改变了，喝口茶，放松放松。。。');
    // gulp.run('lint', 'sass', 'scripts');
    // 监听文件变化
    gulp.watch(['./app/js/*.js', './app/sass/*.scss'], function() {
        gulp.run('lint', 'sass', 'scripts');
    });
});
