const config = require('../config')

const account = require('./account')
const mahasiswa = require('./mahasiswa')
const alumni = require('./alumni')
const _event = require('./event')
const search = require('./search')

// Root 
const router = require('express').Router()


router.index = router.get('/', function(req,res) {
  let docs
  if (config.app.host === '0.0.0.0') {
    docs = 'https://api-alumni-mengajar.herokuapp.com/docs'
  } else {
    docs = `http://${config.app.host}:${config.app.port}/docs`
  }
  res.render('index', {docs})
})

const index = router

module.exports = {
  index,
  account,
  mahasiswa,
  alumni,
  _event,
  search
}