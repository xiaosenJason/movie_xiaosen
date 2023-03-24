const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components'
    },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules', './src']
  }
})
