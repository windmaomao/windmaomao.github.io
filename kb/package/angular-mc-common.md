# Mc Common
Angular 1 {.subtitle}

## Package
```json
{
  "name": "angular-mc-common",
  "version": "3.4.1",
  "description": "Angular MC Common",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "dev": "cd dist && lite-server .",
    "serve": "webpack --watch",
    "jshint": "jshint src",
    "test": "karma start"
  },
  "repository": {
    "type": "git",
    "url": "https://fang-a.jin%40db.com@stash.gto.intranet.db.com:8081/scm/~fang-a.jin_db.com/angular-mc-common.git"
  },
  "author": "Fang-A Jin",
  "license": "ISC",
  "dependencies": {
    "angular-ui-router": "^1.0.3",
    "ng-redux": "^3.3.3",
    "ramda": "^0.24.1",
    "redux": "^3.7.0",
    "redux-logger": "^3.0.6",
    "uuid": "^3.1.0"
  },
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^6.4.1",
    "babel-plugin-istanbul": "^4.1.4",
    "babel-preset-es2015": "^6.24.1",
    "babel-register": "^6.24.1",
    "bootstrap": "^3.3.7",
    "browserify": "^14.4.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.26.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "html-loader": "^0.4.4",
    "html-webpack-plugin": "^2.28.0",
    "istanbul": "^0.4.5",
    "jasmine-core": "^2.6.4",
    "jshint-loader": "^0.8.4",
    "json-loader": "^0.5.4",
    "karma": "^1.3.0",
    "karma-browserify": "^5.1.1",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-jasmine": "^1.1.0",
    "karma-spec-reporter": "0.0.31",
    "karma-tap": "^3.1.1",
    "karma-tap-pretty-reporter": "^3.0.5",
    "karma-webpack": "^2.0.3",
    "ng-annotate": "^1.2.2",
    "ng-annotate-webpack-plugin": "^0.2.0",
    "raw-loader": "^0.5.1",
    "resolve-url-loader": "^1.6.1",
    "smart-banner-webpack-plugin": "^3.0.1",
    "style-loader": "^0.13.1",
    "svg-url-loader": "^1.1.1",
    "tap-spec": "^4.1.1",
    "uglify-js": "^2.7.5",
    "uglifyjs-webpack-plugin": "^0.1.2",
    "url-loader": "^0.5.8",
    "watchify": "^3.9.0",
    "webpack": "^1.14.0"
  }
}

```

## Webpack

```javascript
var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  SmartBannerPlugin = require('smart-banner-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  AnnotatePlugin = require('ng-annotate-webpack-plugin')
;

var ExtractCSSPlugin = new ExtractTextPlugin('mc-common.css');

var PATH = {
  ver: '3.4.1',
  date: '2/13/2018',
  src: 'src',
  dist: 'dist',
  port: '3000',
  api: '3001'
};

module.exports = {
  // devtool: '#eval',
  context: path.resolve(__dirname, PATH.src),
  entry: {
    'mc-common': [
      './common/module.js'            // main javascript & css entry
    ],
    'mc-common-comp': [
      './comp/module.js'              // compliment materials
    ],
    'mc-common-perm': [
      './perm/module.js'              // permission control
    ],
    'mc-common-demo': [
      './demo/app.js'                 // style guide admin demo
    ],
    // 'mc-material-demo': [
    //   './material/app.js'             // style guide front demo
    // ],
    // 'playground': [
    //   './playground/app.js'           // playground app
    // ]
    // vendor: ['angular']
  },
  output: {
    path: path.resolve(__dirname, PATH.dist),
    filename: '[name].js',
  },
  // debug: true,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'jshint'] },
      { test: /\.html$/, loader: 'html', query: { minimize: false } },
      { test: /\.scss$/, loaders: ['style', 'css?minimize', 'sass']},
      // { test: /\mc.select.scss$/, loader: ExtractCSSPlugin.extract(['css?minimize', 'sass'])},
      // { test: /\.svg$/, loaders: ['svg-url']},
      { test: /\.json$/, loaders: ['json']},
      { test: /\.png$/, loader: 'file-loader?name=./img/[hash].[ext]'},
      // { test: /\.css$/, loaders: ['style', 'css'] },
      // { test: /\.(woff2)$/, loader: 'file-loader?name=./fonts/mc-common.[ext]' },
      // { test: /\.svg$/, loader: 'file-loader?name=./fonts/[hash].[ext]' },
      // { test: /\.eot$/, loader: 'file-loader?name=./fonts/[hash].[ext]' },
      // { test: /\.woff$/, loader: 'file-loader?name=./fonts/[hash].[ext]' },
      // { test: /\.woff2$/, loader: 'file-loader?name=./fonts/[hash].[ext]' },
      // { test: /\.ttf$/, loader: 'file-loader?name=./fonts/[hash].[ext]' },
      { test: /\.woff$/, loader: 'url?mimetype=application/font-woff&name=./fonts/mc-common.[ext]' },
      { test: /\.eot$/, loader: 'url?mimetype=application/vnd.ms-fontobject&name=./fonts/mc-common.[ext]' },
      { test: /\.ttf$/, loader: 'url?mimetype=application/octet-stream&name=./fonts/mc-common.[ext]' },
      { test: /\.svg$/, loader: 'url?mimetype=image/svg+xml&name=./fonts/mc-common.[ext]' },
    ]
  },
  // resolve: {
  //   extensions: ['', '.js', '.html']
  // },
  plugins: [
    // demo app index.html
    new HtmlWebpackPlugin({
      title: 'MC Common Example',
      template: path.resolve(__dirname, PATH.src, 'demo/index.html'),
      inject: false
    }),
    // playground app playgournd.html
    new HtmlWebpackPlugin({
      filename: 'playground.html',
      title: 'MC Common Playground',
      template: path.resolve(__dirname, PATH.src, 'playground/index.html'),
      inject: false
    }),
    // material app material.html
    new HtmlWebpackPlugin({
      filename: 'material.html',
      title: 'MC Common Material',
      template: path.resolve(__dirname, PATH.src, 'material/index.html'),
      inject: false
    }),
    new CopyWebpackPlugin([
      // { from: 'index.html' },
      // { from: 'iframe.html' },
      // { from: 'api/**/*' }
    ]),
    new UglifyJSPlugin({
      mangle: false,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        // drop_console: true
      },
      // mangle: {
      //   except: ['$'],
      //   screw_ie8: true,
      //   keep_fnames: true
      // },
    }),
    new SmartBannerPlugin({
      banner: `[filename] ver ${PATH.ver} \n\nDate: : ${PATH.date}\n`,
      raw: false,
      entryOnly: true
    }),
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(PATH.ver)
    }),
    ExtractCSSPlugin,
    new AnnotatePlugin({
      add: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, PATH.dist),
    compress: true,
    port: PATH.port,
    watch: true,
    // proxy: {
    //   '/PortalServices/**': {
    //     target: 'http://localhost:' + PATH.api,
    //     changeOrigin: true,
    //     logLevel: 'debug',
    //     secure: false
    //   }
    // }
  },
};

```