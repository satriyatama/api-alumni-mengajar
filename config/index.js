const app = require('./app')
const cors = require('./cors')
const database = require('./database')
const jwt = require('./jwt')
const serviceAccount = require('./firebase_storage_cred.json')

module.exports = {
  app,
  cors,
  database,
  jwt,
  serviceAccount,
}