const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const commonWebpackConfig = require("./webpack.common.config");

const config = { ...commonWebpackConfig.defaultWebpackConfig };
config.devtool = "source-map";
config.entry = "./src/index";
config.watch = false;
config.devServer = {
  historyApiFallback: true,
  port: 3000,
  static: {
    directory: path.join(__dirname, "public"),
  },
};

config.plugins.push(
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    favicon: "./public/favicon.ico",
  })
);

module.exports = config;
