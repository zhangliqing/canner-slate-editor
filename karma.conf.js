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
      entry: './src/index.js',
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
                loader: "style-loader",
                options: {
                  sourceMap: true
                }
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
