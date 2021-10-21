const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_NAME,
    authSource: process.env.MONGODB_AUTHSOURCE,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    dbName: process.env.MONGODB_DATABASE_NAME,
  },
}