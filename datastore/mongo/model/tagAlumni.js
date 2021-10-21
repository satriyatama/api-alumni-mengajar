const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  tagId: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('TagAlumnis', schema, 'tagAlumnis')