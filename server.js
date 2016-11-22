const { webpackConfig, webpackDevServer } = require('webpack-base-config');

const Options = {
  entry: './test/index.js',  // your project entry file
  htmlTemplate: './index.html',
};

webpackDevServer(webpackConfig(Options));
