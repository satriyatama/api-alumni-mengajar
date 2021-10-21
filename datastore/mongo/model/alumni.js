const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  linkedIn: {
    type: String,
    require: true,
  },
  facebook: {
    type: String,
    require: true,
  },
  instagram: {
    type: String,
    require: true,
  },
  twitter: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('Alumnis', schema, 'alumnis')