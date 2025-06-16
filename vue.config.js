process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://left4dead2-stats.netlify.app'
            }
        }
    },
    
    transpileDependencies: true
}
