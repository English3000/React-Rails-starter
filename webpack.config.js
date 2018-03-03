const path = require("path");
const webpack = require("webpack");

let plugins = [];

let devPlugins = [];
let prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: true
  //   }
  // })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  // Running Webpack executes index.js (in ./frontend).
  entry: ["babel-polyfill", "./frontend/index.js"],
  // Webpack creates (bundles) a tree of files that require one another,
  //  bundle.js (in ./app/assets/javascripts).
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, "app", "javascript", "packs") :
            path.resolve(__dirname, "app", "assets", "javascripts"),
    publicPath: '/assets/',
    filename: "bundle.js"
  },
  devServer: {// https://github.com/webpack/docs/wiki/webpack-dev-server
    contentBase: path.resolve(__dirname, "app", "assets", "javascripts"), //will look for index.html file
    compress: true,
    port: 3000,
    open: true, //opens browser
    hotOnly: true //enables hot module reload!
    // https: true
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    // Webpack will bundle both .js & .jsx files.
    extensions: [".js", ".jsx", "*"]
  }
};
