// node写法
let path = require('path')
console.log(path.resolve('dist'))

module.exports = {
    mode: 'development', //模式， 默认两种     production   - development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js',//打包后的文件名
        path: path.resolve(__dirname, 'build'), //必须为绝对路径
    }
}