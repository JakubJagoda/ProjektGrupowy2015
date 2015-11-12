const gulp = require('gulp'),
    webpack = require('webpack-stream'),
    ngAnnotate = require('gulp-ng-annotate');

module.exports = function () {
    return gulp.src(['app/*.ts', 'app/modules/**/*.ts', '!app/modules/**/*.spec.ts'])
        .pipe(webpack({
            module: {
                loaders: [
                    {test: /\.ts$/, loader: 'babel!ts'}
                ]
            },
            resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
            },
            output: {
                filename: 'app.js'
            },
            devtool: 'inline-source-map'
        }))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('.tmp'));
};
