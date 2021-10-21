const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  fileName: {
    type: String,
    require: true,
  },
  extension: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  size: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true
  },
})

module.exports = mongoose.model('Images', schema, 'images')