/**
 * @name SEkin
 * @description description
 * @time 2020-07-10
 */
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function (isDev) {
    const parse = isDev ? {
      loader: "ts-loader",
      options: {
        configFile: path.join(__dirname,"../tsconfig.json"),
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
       // happyPackMode: false
      }
    } : {
      loader: "babel-loader",
      options: {
      }
    };
    return {
      rules: [
        {
          test: /\.(vue|ts|tsx)$/,
          // enforce:'post' 的含义是把该 Loader 的执行顺序放到最后
          // enforce 的值还可以是 pre，代表把 Loader 的执行顺序放到最前面
          enforce: "pre", // 需要把这个放执行的最前面，否则会有报错
          exclude: /node_modules|assert/, // 排除不处理的目录
          loader: "eslint-loader",
          options: {
            fix: false,
            emitWarning: true,
            formatter: 'checkstyle',
            extensions: [".vue", ".ts", ".tsx"],
            cache: false,
          },
        },
        {
          test: /\.vue$/,
          exclude: /node_modules|assert/, // 排除不处理的目录
          loader: "vue-loader",
          options: {
            // hotReload: true, // 关闭热重载
            // loaders: {
            //   scss: 'vue-style-loader!css-loader!sass-loader',
            //   sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            // }
          },
        },
        {
          test: /\.ts(x)?$/,
          exclude: /node_modules|assert/, // 排除不处理的目录
          use: [parse],
        },
         {
          test: /\.tsx$/,
          exclude: /node_modules|assert/, // 排除不处理的目录
          use:[
            "babel-loader" ,
            {
              loader:"ts-loader",
              options:{
                appendTsSuffixTo: [/\.vue$/],
              }
            }
          ]
        },
        {
          test: /.(css|scss)$/,
          exclude: /assert/, // 排除不处理的目录
          // exclude: /node_modules|assert/, // 排除不处理的目录
          // include: path.resolve(__dirname, 'src'), // 精确指定要处理的目录
          use: [
            !isDev
              ? {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                }
              : {
                  loader: "style-loader",
                },
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(jpg|png|ico|jpeg|gif)$/,
          // exclude: /assert/, // 排除不处理的目录
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[name].[ext]",
                limit: 100,
                publicPath: "../img", // 文件中 替换有关图片路径的引用 为这个
                outputPath: "img/", // 文件的输出位置路径 是相对于入口文件的路径
                // 有关webpack 打包时路径问题看这个
                // https://juejin.im/post/5b8d1e926fb9a019b66e4657#comment
                // https://www.jianshu.com/p/d3f34c3872a5
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          //  exclude://,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 5000,
                name: "[name].[ext]",
                publicPath: "../fonts/",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    };
};
