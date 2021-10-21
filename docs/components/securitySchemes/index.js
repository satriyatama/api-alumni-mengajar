const bearerAuth = require('./bearerAuth')

module.exports = {
  securitySchemes: {
    ...bearerAuth,
  }
}