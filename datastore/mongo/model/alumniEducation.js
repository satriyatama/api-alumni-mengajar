const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  school: {
    type: String,
    require: true,
  },
  degree: {
    type: String,
    require: true,
  },
  studyField: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  grade: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  userId: {
    type: Number,
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

module.exports = mongoose.model('alumniEducations', schema, 'alumniEducations')