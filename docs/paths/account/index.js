const login = require('./login')
const register = require('./register')
const getUser = require('./getUser')

module.exports = {
  '/account/login': {
    ...login
  },
  '/account/register': {
    ...register
  },
  '/account': {
    ...getUser
  }
}