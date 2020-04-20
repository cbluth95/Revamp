module.exports = {
  devServer: {
    disableHostCheck: true
  },

  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },

  configureWebpack: {
    resolve: {
      symlinks: false
    }
  },

  transpileDependencies: ["vuetify"]
};
