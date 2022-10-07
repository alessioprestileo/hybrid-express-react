const commonConfig = require("./webpack.config.common");

module.exports = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    filename: "bundle.main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.client.dev.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    port: 3000,
  },
};
