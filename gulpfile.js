'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var webpackConfigEx = require('./examples/webpack.config.js');

var del = require('del');

gulp.task('clean', function() {
    return del('build/*.js');
});

gulp.task('build', ['clean'], function() {
	return gulp.src('./src/app.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('build/'));
});

gulp.task('example.clean', function() {
    return del('examples/js/*.js');
});

gulp.task('example', ['example.clean'], function() {
	return gulp.src('./src/app.js')
		.pipe(webpack(webpackConfigEx))
		.pipe(gulp.dest('examples/js/'));
});

gulp.task('watch', function() {
	gulp.watch(['examples/**/*.js', '!examples/js/*.js'], ['example']);
});

gulp.task('default', ['build', 'example']);