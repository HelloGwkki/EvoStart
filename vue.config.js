const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    host: "0.0.0.0",
    port: 1145,
    client: {
      webSocketURL: "ws://0.0.0.0:1145/ws"
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  chainWebpack: (config) => {
    config.plugin('html')
          .tap((args) => {
            args[0].title = "春茶の主页";
            return args;
          });
  }
})
