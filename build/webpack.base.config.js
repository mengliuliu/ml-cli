const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    path: path.resolve(__dirname, "../src/index"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  // node: {
  //     global: false,
  //     __filename: true,
  //     __dirname: true
  // },
  //   resolve: {
  //     alias: {
  //       "@src": path.resolve(__dirname, "../src"),
  //       "@pages": path.resolve(__dirname, "../src/pages"),
  //       "@api": path.resolve(__dirname, "../src/api"),
  //       "@utils": path.resolve(__dirname, "../utils"),
  //     },
  //     extensions: [".js", ".jsx", ".ts", ".tsx", "css", "less"],
  //   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
            //   limit: 2000,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      //       {
      //         test: /\.less$/,
      //         use: ["style-loader", "css-loader", "less-loader"],
      //       },
      //       {
      //         test: /\.(js|jsx|ts|tsx)$/,
      //         use: ["babel-loader"],
      //         exclude: /node_modules/,
      //       },
      //       {
      //         test: /\.(png|jpg|gif)$/i,
      //         use: [
      //           {
      //             loader: "url-loader",
      //             options: {
      //               limit: 8192,
      //             },
      //           },
      //         ],
      //         type: "javascript/auto",
      //       },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test html-webpack-plugin",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
    //   new webpack.DefinePlugin({
    //     "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    //   }),
  ],
};
