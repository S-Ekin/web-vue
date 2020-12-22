/**
 * @name SEkin
 * @description description
 * @time 2020-07-10
 */
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = function () {
    return {
      // minimize: false,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
      usedExports: true, //使用 tree-shakingjj
      chunkIds: 'named',
      moduleIds: 'named',
      runtimeChunk: {
         // 包清单
         name: 'manifest',
       },
      splitChunks: {
        // automaticNameDelimiter: '*', // 分隔符
        chunks: 'initial', 
        minSize: 0,
        // maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 2,
        maxInitialRequests: 1, // 很重要不然会导致有的js不能打包进去
        cacheGroups: {
          common: {
            // 检查异步加载的公共代码
            name: 'common',
            chunks: 'async',
            priority: 4,
            minChunks: 2
          },
          asyncVendors: {
            // 异步加载的第三方库
            name: 'asyncVendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'async', // 检查异步加载的
            priority: 4,
            minChunks: 2
          },
          commonMain: {
            // 检查初始化时，自己的源码的公共代码
            test: /src/,
            chunks: 'initial',
            name: 'commonMain',
            priority: 2,
            minChunks: 2,
          },
          vendors: {
            // 检查初始化的，同步加载的第三方库 (也就是entry里的js第一次加载时引入的)
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            name: 'vendor',
            // filename: '[name].bundle.js',
            priority: 10,
            enforce: true, // 强制检查打包，不管最小或最大的chunk限制
            minChunks: 1,
          },
        },
      },
    };
};
