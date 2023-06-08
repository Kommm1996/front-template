const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const data = require("./data_file.json");
const ejs_list = [];
data.index_list.forEach((e) => {
  ejs_list.push(
    new HtmlWebpackPlugin({
      template: `./src/ejs/${e.file_name}.ejs`,
      filename: `${e.file_name}.html`,
      minify: false
    })
  );
});

module.exports = {
  cache: false,
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "lib/built/built.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "lib/img/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "lib/font/[hash][ext]",
        },
      },
      {
        test: /\.ejs$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false,
            },
          },
          {
            loader: "template-ejs-loader",
            options: {
              data: data,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    ...ejs_list,
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new MiniCssExtractPlugin({
      filename: "lib/built/built.css",
    }),
    new CssMinimizerPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
  },
  performance: {
    hints: false,
  },
};
