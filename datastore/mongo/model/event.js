const mongoose = require('mongoose')
const moment = require('moment-timezone')
const luxon = require('luxon')

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  dateTime: {
    date: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: false,
  },
  capacity: {
    type: Number,
    required: true,
  },
  enrolled: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: false,
  },
  userId: {
    type: String,
    required: true
  },
  visited: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Events', schema, 'events')
