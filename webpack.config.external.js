var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'cheap-source-map',
  entry: './docs/externalIndex.js',
  output: {
    path: path.join(__dirname, 'docs/external'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        EXTERNAL: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        /* eslint-disable */
        ecma: 6,
        mangle: true,
        compress: {
          warnings: false // Suppress uglification warnings
        },
        output: {
          comments: false
        },
      },
      output: {
        beautify: false,
        ascii_only: true
      },
      exclude: /\.min\.js$/,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.BannerPlugin('This file is created by Canner. Built time: ' + // eslint-disable-line max-len
      new Date()),
    new BundleAnalyzerPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: 'css-loader',
            options: {
              localIdent: '[path]___[name]__[local]___[hash:base64:5]',
              importLoaders: 1,
              modules: true
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        exclude: [/\.antd.scss$/, /\.lib.scss$/]
      },
      {
        test: [/\.antd.scss$/, /\.lib.scss$/],
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.json$/,
        include: [/node_modules/],
        loader: 'json-loader'
      }
    ]
  }
};
