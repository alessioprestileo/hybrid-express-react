const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist/src/server/public"),
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/client/html-template/index.html"),
    }),
  ],
};
