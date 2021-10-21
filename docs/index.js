const definition = require('./definition')
const servers = require('./servers')
const paths = require('./paths')
const components = require('./components')

module.exports = {
  ...definition,
  ...servers,
  ...paths,
  ...components
}