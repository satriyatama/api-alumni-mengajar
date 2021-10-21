const express = require('express')

const middleware = require('../app/middleware') // Middleware
const schema = require('../app/schema') // Schema
const handler = require('../app/handler') // Handler

const router = express.Router()

router.post(
  '/register',
  [
    middleware.validation.schema(schema.account.register),
    middleware.uniqueData.username,
    middleware.uniqueData.email
  ],
  handler.account.register
)

router.post(
  '/login',
  middleware.validation.schema(schema.account.login),
  handler.account.login
)

router.get(
  '/',
  middleware.verification.jwt,
  handler.account.getUser
)

module.exports = router