require('./check-versions')()
var serveIndex = require('serve-index')

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var port = config.doc.port;
var docPath = path.resolve(__dirname, '../docs')
var app = express()

app.use(serveIndex(docPath, {
  icons: true
}))
app.use(express.static(docPath))

var uri = 'http://localhost:' + port

console.log('> Starting doc server...')
opn(uri)

var server = app.listen(port)

module.exports = {
  close: () => {
    server.close()
  }
}
