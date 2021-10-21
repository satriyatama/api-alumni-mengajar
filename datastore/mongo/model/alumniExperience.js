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
  employmentType: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: false,
  },
  industry: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  userId: {
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

module.exports = mongoose.model('AlumniExperiences', schema, 'alumniExperiences')