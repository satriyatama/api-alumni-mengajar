const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  port: process.env.PORT,
  host: process.env.HOST,
  env: process.env.NODE_ENV,
}