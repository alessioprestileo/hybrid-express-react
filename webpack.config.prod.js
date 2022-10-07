const commonConfig = require("./webpack.config.common");

module.exports = {
  ...commonConfig,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.client.prod.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
