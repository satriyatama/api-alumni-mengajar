const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  eventId: {
    type: String,
    require: true
  },
  tagId: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('tagEvents', schema, 'tagEvents')