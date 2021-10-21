const luxon = require('luxon')
const moment = require('moment-timezone')
const model = require('../datastore/mongo/model')

function checkEnrollment (userId, eventId) {
    return model.enrollment.findOne({userId,eventId})
}

function create(userId, eventId) {
  const dateTimeNow = moment.tz(luxon.DateTime.now().toString(), "Asia/Jakarta")
  const data = { 
    userId,
    eventId,
    createdAt : dateTimeNow,
  }
  return model.enrollment.create(data)
}

module.exports = {
  create,
  checkEnrollment
}