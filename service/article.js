const repository = require('../repository')

async function getAllByUserId(userId) {
  const articles = await repository.article.getAllByUserId(userId)
  return articles
}

module.exports = {
  getAllByUserId,
}