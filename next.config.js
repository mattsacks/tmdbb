/*eslint-env node*/
const path = require("path");

const webpackConfig = {
  env: {},
  webpack(config) {
    config.resolve.modules = [path.resolve(__dirname), "node_modules"];
    return config;
  }
};

module.exports = webpackConfig;
