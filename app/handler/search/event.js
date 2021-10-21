const Fuse = require('fuse.js')
const moment = require('moment-timezone')


const service = require('../../../service')

module.exports = async function event (req, res) {
  const query = req.query
  const q = query.q

  let getEvents = await service._event.getAll()

  const date = new Date()
  const now = moment.tz(date.toISOString(), 'Asia/Jakarta')
  const events = JSON.parse(JSON.stringify(getEvents)).filter(_event => {
    const eventDate = _event.dateTime.date
    const startHour = _event.dateTime.start
    const eventTime = new Date(`${eventDate} ${startHour}`)
    const formattedEventTime = moment.tz(eventTime.toISOString(), 'Asia/Jakarta')
    const diff = formattedEventTime.diff(now, 'minutes')
    if (diff > 0) {
      return true
    }
    return false
  })

  for (let i = 0; i < events.length; i++) {
    events[i].tags = await service.tag.relationship.getAllByOtherId(events[i].id, 'event')
    
    const alumniId = events[i].userId
    const alumni = await service.user.getUserById(alumniId)
    const firstName = await alumni.firstName
    const lastName = await alumni.lastName
    const alumniTags = await service.tag.relationship.getAllByOtherId(alumniId, 'alumni')

    events[i].alumni = {
      id: alumniId,
      name: `${firstName} ${lastName}`,
      tags: alumniTags
    }
    delete events[i].userId
  }

  const options = {
    includeScore: false,
    keys: ['title','tags','alumni.name','alumni.tags']
  }

  const fuse = new Fuse(events, options)

  const result = fuse.search(q).map(_event => {
    const objEvent = _event.item
    const data  = {
      id: objEvent.id,
      title: objEvent.title,
      enrolled: objEvent.enrolled,
      capacity: objEvent.capacity,
      seatRemaining: objEvent.capacity - objEvent.enrolled,
    }
    if (objEvent.image !== undefined) {
      data.imageUrl = `https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/${objEvent.image.id}.${objEvent.image.format}`
    }
    return data
  }).slice(0, 10)

  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      events: result
    },
    message: 'Successfully Returned Searched Content'
  })
}