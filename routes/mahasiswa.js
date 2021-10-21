const router = require('express').Router()

// Middleware
const middleware = require('../app/middleware')

// Schema
const schema = require('../app/schema')

// Handler
const handler = require('../app/handler')

router.get(
  '/profile',
  handler.mahasiswa.profile
)

router.get(
  '/dashboard/popular-event',
  [
    middleware.verification.jwt,
    middleware.verification.mahasiswa
  ],
  handler.mahasiswa.dashboard.popularEvent
)

router.get(
  '/dashboard/event-for-you',
  [
    middleware.verification.jwt,
    middleware.verification.mahasiswa
  ],
  handler.mahasiswa.dashboard.eventsForYou
)

router.post(
  '/event/enroll/:eventId',
  [
    middleware.verification.jwt,
    middleware.verification.mahasiswa
  ],
  handler.mahasiswa.enrollment.enroll
)

module.exports = router