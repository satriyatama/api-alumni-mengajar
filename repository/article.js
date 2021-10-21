const model = require('../datastore/mongo/model')

function getAllByUserId(userId) {
  return model.article.find({userId})
}

module.exports = {
  getAllByUserId
}