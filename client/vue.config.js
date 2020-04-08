/**
 * Author:      Luxmithan Sukumar
 * File name:   vue.config.js
 * Version:     1.0
 * Description: Vue configuration for development
 */

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:80/",
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
