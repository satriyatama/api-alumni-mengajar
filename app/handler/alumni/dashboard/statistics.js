const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')

module.exports = async function statistics(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const getEvents = await service._event.getAllByUserId(userId)
  const events = JSON.parse(JSON.stringify(getEvents))
  const eventsCount = events.length

  const getArticles = await service.article.getAllByUserId(userId)
  const articles = JSON.parse(JSON.stringify(getArticles))
  const articlesCount = articles.length
  
  let viewers = 0
  events.forEach(event => {
    viewers += event.enrolled
  })

  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {   
      events: eventsCount,
      articles: articlesCount,
      viewers
    },
    message: "Successfully returned alumni's dashboard's statistics"
  })
}
