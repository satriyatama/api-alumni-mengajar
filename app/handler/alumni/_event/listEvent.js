const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function listEvent(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const getEvents = await service._event.getAllByUserId(userId)
  const events = JSON.parse(JSON.stringify(getEvents))

  const date = new Date()
  const now = moment.tz(date.toISOString(), 'Asia/Jakarta')
  const listEvent = events.map(_event => {
    const eventDate = _event.dateTime.date
    const startHour = _event.dateTime.start
    const endHour = _event.dateTime.end
    const eventStart = new Date(`${eventDate} ${startHour}`)
    const eventEnd = new Date(`${eventDate} ${endHour}`)

    const formattedEventStart = moment.tz(eventStart.toISOString(), 'Asia/Jakarta')
    const formattedEventEnd = moment.tz(eventEnd.toISOString(), 'Asia/Jakarta')
  
    const nowDiff = formattedEventStart.diff(now, 'minutes')
    const hourDiff = formattedEventEnd.diff(formattedEventStart, 'minutes')

    let status = ''
    if (nowDiff > hourDiff) {
      status = 'Akan Datang'
    } else if (nowDiff <= hourDiff) {
      status = 'Sedang Berjalan'
    } else if (nowDiff < 0) {
      status = 'Selesai'
    }
  
    return data = {
      id: _event.id,
      title: _event.title,
      status,
      date: _event.dateTime.date,
      start: _event.dateTime.start,
      end: _event.dateTime.end,
      enrolled: _event.enrolled,
      capacity: _event.capacity,
      price: _event.price
    }
  })
  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      events: listEvent
    },
    message: "Successfully returned alumni's event list"
  })
}