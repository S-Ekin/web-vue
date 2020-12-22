/**
 * @author: SEKin 
 * @Date: 2020-07-20 14:38:09 
 * @description:  
 * @Last Modified time: 2020-07-20 14:38:09 
 */
module.exports = function () {
  return {
      historyApiFallback: true,
      // contentBase: path.join(__dirname, '../static'),
      quiet: true, // 控制台中不输出打包的信息
      noInfo: true,
      inline: true, // 开启页面自动刷新,
      hot: true,
      hotOnly: true, // 开启后，页面不会刷新，不然一改页面就会刷新
      lazy: false,
      publicPath: '/',
      compress: true,
      disableHostCheck: true, // 让外网可以访问代理地址
      // host:"0.0.0.0",//让外网可以访问代理地址
      progress: false, // 显示打包的进度
      stats: "normal",
      overlay: {
        // 把编译的错误显示在浏览器上
        errors: true,
        warnings: true,
      },
      watchOptions: {
        aggregateTimeout: 300,
      },
      clientLogLevel: 'warn', 
      port: '8035', // 设置端口号
      openPage: 'index.html', // 导航页面
      proxy: {
        '/user': {
           target: "http://172.16.13.130:8080",
          // target: "http://localhost:8090",
         // target: " http://139.159.246.191:8080",
          secure: false,
          changeOrigin: true,
        },
      },
    };
};
