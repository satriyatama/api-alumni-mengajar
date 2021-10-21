const account = require('./account')
const alumni = require('./alumni')
const mahasiswa = require('./mahasiswa')
const search = require('./search')
const _event = require('./_event')

module.exports = {
  'paths':{
    ...account,
    ...mahasiswa,
    ...alumni,
    ...search,
    ..._event,
  }
}