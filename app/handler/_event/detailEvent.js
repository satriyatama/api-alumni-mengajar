const jwt = require('jsonwebtoken')

const service = require('../../../service')

module.exports = async function detailEvent(req,res) {
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.decode(token).id
    const user = await service.user.getUserById(userId)
    const role = user.role
    const eventId = req.params.eventId
    const getEvent = await service._event.getEventById(eventId) 
    const event = JSON.parse((JSON.stringify)(getEvent))
    const isEnrolled = await service.enrollment.checkEnrollment(userId,eventId)

    const alumni = await service.user.getUserById(event.userId)
    const alumniName = `${alumni.firstName} ${alumni.lastName}`

    const tagEvents = await service.tag.relationship.getAllByOtherId(event.id, 'event')

    let imageUrl = ''
    if (event.hasOwnProperty('image')) {
      imageUrl = `https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/${event.image.id}.${event.image.format}`
    } else {
      imageUrl = undefined
    }

    const eventDate = event.dateTime
    let result = {
      event: {
        id: event.id,
        title: event.title,
        date: `${eventDate.day}, ${eventDate.date.slice(-2)} ${eventDate.month} ${eventDate.date.slice(0,4)}`,
        enrolled: event.enrolled,
        capacity: event.capacity,
        price: event.price,
        speaker: alumniName,
        tags: tagEvents,
        description: event.description,
        imageUrl,
        alumni: {
          id: event.userId,
          name: alumniName,
          perguruanTinggi: event.perguruanTinggi
        }
      }
    }

  if (role === 'mahasiswa') {
    result.event.mahasiswa = {
      id: userId,
      isEnrolled
    }
  }

  if(role === "mahasiswa" && isEnrolled) {
    result.event.link = event.link
  } else if(role === 'alumni') {
    result.event.link = event.link
  }

    return res.status(200).json({
      statusCode: 200,
      status: 'OK',
      result,
      message: 'Successfully returned detail event'
    })
}