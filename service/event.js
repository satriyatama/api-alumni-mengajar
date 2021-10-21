const repository = require('../repository')

async function create(data, isFileExist) {
  let newEvent = await repository._event.create(data, isFileExist)
  return newEvent
}

async function upload(file, destination) {
  let uploadedImage = await repository._event.upload(file, destination)
  return uploadedImage
}

async function getAll() {
  let events = await repository._event.getAll()
  return events
}

async function getEventById(id) {
  let event = await repository._event.getEventById(id)
  return event 
}

async function getAllByUserId(userId) {
  let events = await repository._event.getAllByUserId(userId)
  return events
}

async function getAllSortedByVisitedAsc() {
  let sortedEvents = await repository._event.getAllSortedByVisitedAsc()
  return sortedEvents
}

module.exports = {
  create,
  upload,
  getEventById,
  getAll,
  getAllByUserId,
  getAllSortedByVisitedAsc
}