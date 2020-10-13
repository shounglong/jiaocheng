const path = require("path");

//__dirname是node.js的一个全局变量，用于指向当前执行脚本（dirname.js）所在的目录路径，而且是绝对路径
function resolve(dir) {
    //此处以dir(src)连接__dirname和path
    return path.join(__dirname, dir);
}

module.exports = {
    devServer: {/* 自动打开浏览器 */
        open: false,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8866,
        https: false,
        hotOnly: false,

    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },
    /** 是否为生产环境构建生成 source map？
     * 如果有一些JS报错，那么浏览器会通过解析这个map文件来重新merge压缩后的js,
     * 使开发者可以用未压缩前的代码来调试，这样会给我们带来很大的方便。这机制只有chrome有，发布环境不需要
     * 改成false可以压缩打包体积
     * */
    productionSourceMap: false,
    chainWebpack: config => {
        //发布模式，设置参数
        config.when(process.env.NODE_ENV === 'production', config => {

            /** 删除懒加载模块的 prefetch preload，降低带宽压力(使用在移动端) */
            config.plugins.delete("prefetch").delete("preload");
            //压缩代码，js文件最小化处理
            config.optimization.minimize(true);

            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })
        })
        //开发模式，设置参数
        config.when(process.env.NODE_ENV === 'development', config => {
            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    }
}