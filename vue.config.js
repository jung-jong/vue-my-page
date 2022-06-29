const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});

const target = "http://localhost";
module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/api": {
        target,
        changeOrigin: true,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/admin/" : "/",
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@import "~@/variables.scss";`,
  //     },
  //   },
  // },
};
