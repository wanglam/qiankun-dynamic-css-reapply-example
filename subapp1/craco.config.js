const packageName = require("./package.json").name;

module.exports = {
  webpack: {
    configure: {
      output: {
        library: `${packageName}-[name]`,
        libraryTarget: "umd",
        jsonpFunction: `webpackJsonp_${packageName}`,
      },
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
