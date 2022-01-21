const proxy = require("./proxy");

const config = {
  proxy: proxy.dev,
  dev: {
    host: "localhost",
    port: "3000",
  },
};

module.exports = config;
