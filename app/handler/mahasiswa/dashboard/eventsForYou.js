const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const user = await service.user.getUserById(userId)

  let getEvents = await service._event.getAllSortedByVisitedAsc()

  const date = new Date()
  const now = moment.tz(date.toISOString(), 'Asia/Jakarta')
  let events = JSON.parse(JSON.stringify(getEvents)).filter(_event => {
    const eventDate = _event.dateTime.date
    const startHour = _event.dateTime.start
    const eventTime = new Date(`${eventDate} ${startHour}`)
    const formattedEventTime = moment.tz(eventTime.toISOString(), 'Asia/Jakarta')
    const diff = formattedEventTime.diff(now, 'minutes')
    if (diff > 0 && (_event.enrolled < _event.capacity)) {
      return true
    }
    return false
  })

  for (let i = 0; i < events.length; i++) {
    if (events[i].alumni === undefined) {
      events[i].alumni = {
        id: events[i].userId
      }
    }
    const alumni = await service.user.getUserById(events[i].userId)
    const alumniInfo = {
      perguruanTinggi: alumni.perguruanTinggi,
      jurusan: alumni.jurusan
    }
    Object.assign(events[i].alumni, alumniInfo)

    events[i].tags = await service.tag.relationship.getAllByOtherId(events[i].id, 'event')
    events[i].alumni.tags = await service.tag.relationship.getAllByOtherId(events[i].userId, 'alumni')

    delete events[i].userId
  }

  let recommendedEvents = []
  let unrecommendedEvents = []

  var arrCorrelationCheck = ['perguruanTinggi','jurusan'];
  arrCorrelationCheck.unshift(...arrCorrelationCheck.flatMap(
      (v, i) => arrCorrelationCheck.slice(i+1).map( w => v + ' ' + w )
  ))

  arrCorrelationCheck.forEach(element => {
    events.forEach(event => {
      if (element.includes(' ')) {
        const elements = element.slice(' ')
        if ((event.alumni[elements[0]] === user[elements[0]]) && 
          (event.alumni[elements[1]] === user[elements[1]])) {
            recommendedEvents.unshift(event)
        }
        else if ((event.alumni[elements[0]] === user[elements[0]]) || 
          (event.alumni[elements[1]] === user[elements[1]])) {
            recommendedEvents.push(event)
        } else {
          unrecommendedEvents.push(event)
        }
      }
    })
  })


  const eventsForYou = [...recommendedEvents, ...unrecommendedEvents].slice(0, 5)

  const resultEvents = []
  eventsForYou.forEach(event => {
    const data = {
      id: event.id,
      title: event.title,
      price: event.price,
      enrolled: event.enrolled,
      capacity: event.capacity,
      seatRemaining: event.capacity - event.enrolled,
      imageUrl: `https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/${event.image.id}.${event.image.format}`
    }
    resultEvents.push(data)
  })

  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      events: resultEvents
    },
    message: 'Successfully returned Events for you'
  })
}