const enroll = require('./enroll')

module.exports = {
  '/mahasiswa/event/enroll/{eventId}': {
    ...enroll
  }
}