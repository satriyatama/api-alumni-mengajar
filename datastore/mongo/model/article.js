const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true,
  },
  summary: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  visited: {
    type: Number,
    require: true,
  },
  alumniId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true
  },
  updatedAt: {
    type: Date,
    require: true
  }
})

module.exports = mongoose.model('Articles', schema, 'articles')