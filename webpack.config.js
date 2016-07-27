var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = 'http://ilive.icampus.us/';
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  //插件项
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('js/common.js'),
  ],
  //页面入口文件配置
  entry: getEntry(),
  //入口文件输出配置
  output: {
    filename: 'js/[name].bundle.js',
    path: path.join(__dirname, './dist/'),
    publicPath: publicPath
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass?sourceMap'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      // { test: /\.(png|jpg)$/, loader: 'file?name=images/[name].[ext]?[hash]'},
      { test: /\.(html)$/, loader:'file?name=html/[name].[ext]'},
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.js$/, exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
         presets: ['es2015'],
         plugins: ['transform-runtime']
        }
      }
    ]
  },
  //其它解决方案配置
  resolve: {
    root: '', //绝对路径
    extensions: ['', '.js', '.json', '.scss'],
    alias: {
      Console : 'js/console.js',
    }
  }
};

function getEntry() {
  var jsPath = path.resolve('src', 'js');
  var dirs = fs.readdirSync(jsPath);
  var matchs = [], files = {};
  dirs.forEach(function (item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
        files[matchs[1]] = path.resolve('src', 'js', item);
    }
  });
  return files;
}