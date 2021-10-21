const repository = require('../repository')

async function checkEnrollment (userId, eventId) {
    const book = await repository.enrollment.checkEnrollment(userId, eventId)
    if (book === null) {
        return false
    }
    else {
        return true 
    }
}

async function create(userId, eventId) {
  let newenrollment = await repository.enrollment.create(userId, eventId)
  return newenrollment
}

module.exports = {
  create,
  checkEnrollment,
}