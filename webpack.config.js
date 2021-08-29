const miniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "development") {
  mode = "production";
}

module.exports = {
  mode: mode,
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png | jpe?g | gif | svg)$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new miniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
};
