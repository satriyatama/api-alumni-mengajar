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
  organization: {
    type: String,
    require: true,
  },
  issueDate: {
    type: Date,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  expirationDate: {
    type: Date,
    require: true,
  },
  credentialId: {
    type: String,
    require: false,
  },
  credentialURL: {
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

module.exports = mongoose.model('AlumniCertifications', schema, 'alumniCertifications')