const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { resolve } = require("dns");

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};
