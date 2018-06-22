// 引入模块
const gulp = require("gulp"),
	minifyCss = require("gulp-clean-css");
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel"),
	connect = require("gulp-connect");

// 定制gulp任务：压缩CSS
gulp.task("css", function(){
	gulp.src("src/css/*.css") // 源
		   .pipe(minifyCss()) // 处理
		   .pipe(gulp.dest("dist/css/")); // 目标
});

// 定制gulp任务：压缩JS
gulp.task("js", function(){
	gulp.src("src/js.js") // 源
		   .pipe(babel({		 // 将ES6代码转换为ES5代码
	            presets: ['env']
	        }))
		   .pipe(uglify()) // 处理
		   .pipe(gulp.dest("dist/js/")); // 目标
});

// 定制gulp任务：启动服务器
gulp.task("connect", function(){
	connect.server({
		root: 'src'
	});
});