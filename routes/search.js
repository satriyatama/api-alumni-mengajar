const express = require('express')
const router = require('express').Router()

// Middleware
const middleware = require('../app/middleware')

// Schema
const schema = require('../app/schema')

// Handler
const handler = require('../app/handler')

router.get(
  '/event',
  handler.search._event
)
module.exports = router