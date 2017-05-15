var utils = require('./utils')
var config = require('../config')
{{#doc}}
var mdLoader = require.resolve('./markdown-loader')
{{/doc}}
var isProduction = process.env.NODE_ENV === 'production'

var loaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
})

{{#doc}}
if (isProduction) {
  loaders.docs = [{
    loader: 'file-loader',
    options: {
      name: '../docs/[path][name].html',
      useRelativePath: true
    }
  }, mdLoader]
}

{{/doc}}
module.exports = {
  loaders: loaders
}
