const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "out"),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss", ".sass"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "React App",
    }),
  ],
};
