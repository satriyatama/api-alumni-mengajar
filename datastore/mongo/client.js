const mongoose = require('mongoose')
const config = require('../../config')

// create mongodb connection
function createClient() {
  // ${config.mongo.uri}/${config.mongo.dbName}
  return mongoose.connect(`${config.database.mongodb.uri}`, {
    user: config.database.mongodb.username,
    pass: config.database.mongodb.password,
    authSource: config.database.mongodb.authSource,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoCreate: true,
    useFindAndModify: false,
  })
}

// close mongodb connection
function closeClient() {
  return mongoose.disconnect()
}

module.exports = {
  createClient,
  closeClient
}