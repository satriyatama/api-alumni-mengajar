const express = require('express')
const multer = require('multer')
const upload = multer()
const router = require('express').Router()

// Middleware
const middleware = require('../app/middleware')

// Schema
const schema = require('../app/schema')

// Handler
const handler = require('../app/handler')
const { route } = require('./alumni')

router.get(
    '/:eventId',
    [
        middleware.verification.jwt
    ],
    handler._event.detailEvent
)

module.exports = router