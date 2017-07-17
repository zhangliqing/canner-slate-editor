var path = require('path');

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      externals: {
        'react/lib/ReactContext': 'window',
        'react/addons': true,
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: [/node_modules/]
          },
          {
            test: /\.css$/,
            loader: "style!css",
            exclude: /flexboxgrid/
          },
          {
            test: /\.scss$/,
            loaders: [
              "style?sourceMap",
              "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
              "resolve-url",
              "sass?sourceMap"
            ],
            exclude: [/\.antd.scss$/, /\.lib.scss$/]
          },
          {
            test: [/\.antd.scss$/, /\.lib.scss$/],
            loaders: [
              "style",
              "css",
              "sass"
            ]
          },
          {
            test: /\.json$/,
            include: [/node_modules/],
            loader: 'json-loader'
          }
        ]
      },
      resolve: {
        alias: {
          qaEditor: path.join(__dirname, './src/')
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
