const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  perguruanTinggi: {
    type: String,
    require: true,
  },
  jurusan: {
    type: String,
    require: true,
  },
  nim: {
    type: Number,
    require: true,
  },
  angkatan: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true
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

module.exports = mongoose.model('Users', schema, 'users')