const detailEvent = require('./detailEvent')

module.exports = {
  '/event/{eventId}': {
    ...detailEvent
  }

}