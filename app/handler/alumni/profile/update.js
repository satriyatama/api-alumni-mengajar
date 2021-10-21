const jwt = require('jsonwebtoken')
const luxon = require('luxon')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = update = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  let tags = []
  const requestedTags = req.body.tags.replace(/\s+/g, ' ').trim()
  if (requestedTags.includes(',')) {
    tags.push(...requestedTags.split(',').map((item) => item.trim()))
  } else {
    tags.push(requestedTags)
  }

  let tagIds = []
  for (let i = 0; i < tags.length; i++) {
    const newTag = await service.tag.create('alumni', userId, tags[i])
    tagIds.push(newTag.id)
  } 
  
  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      tagIds
    },
    message: 'Successfully updated profile'
  })
}