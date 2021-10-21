const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  tag: {
    type: String,
    require: true,
  },
  usage: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true
  },
})

module.exports = mongoose.model('Tags', schema, 'tags')