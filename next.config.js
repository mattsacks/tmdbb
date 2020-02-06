/*eslint-env node*/
const path = require("path");

const webpackConfig = {
  env: {
    tmdbAPIKey: process.env.TMDB_API_KEY
  },
  webpack(config) {
    config.resolve.modules = [path.resolve(__dirname), "node_modules"];
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

module.exports = webpackConfig;
