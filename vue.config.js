const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

const gitRevision = new GitRevisionPlugin()

module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],

    chainWebpack: (config) => {
        config.plugin('html')
            .tap((args) => {
                args[0].title = "EvoStart";
                return args;
            });
    },

    configureWebpack: {
        plugins: [
            gitRevision,
            new webpack.DefinePlugin({
                'process.env.GIT_VERSION': JSON.stringify(gitRevision.version()),
                'process.env.GIT_COMMITHASH': JSON.stringify(gitRevision.commithash()),
                'process.env.GIT_BRANCH': JSON.stringify(gitRevision.branch()),
            })
        ]
    }
})
