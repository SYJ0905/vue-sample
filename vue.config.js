// eslint-disable-next-line import/no-extraneous-dependencies
// const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 9000,
  },
  publicPath: '/',
  outputDir: 'dist',
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       jQuery: 'jquery',
  //       'window.jQuery': 'jquery',
  //       Popper: ['popper.js', 'default'],
  //     }),
  //   ],
  // },
};
