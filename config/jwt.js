const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  secretToken : process.env.SECRET_TOKEN
}