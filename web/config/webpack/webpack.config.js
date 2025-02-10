const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../public/index.html"), 
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  devServer: {
    static: path.resolve(__dirname, "../../build"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
