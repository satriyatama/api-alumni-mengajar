const jwt = require('jsonwebtoken')
const luxon = require('luxon')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')
const { tag } = require('../../../schema/input/alumni/event')

module.exports = async function create(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  let file =''
  let splitNameFile=''
  let formatFile=''
  let isFileExist = false
  if (req.files.length !== 0) {
    file = req.files[0]
    splitNameFile = file.originalname.split('.')
    formatFile = splitNameFile[splitNameFile.length - 1]
    isFileExist = true
  }

  const eventStart = new Date(`${req.body.date} ${req.body.start}`)
  const time = moment.tz(eventStart.toISOString(), "Asia/Jakarta");
  const engDay = time.format('dddd')
  const engMonth = time.format('MMMM')
  const day = helper.converter.toIndonesiaDay(engDay)
  const month = helper.converter.toIndonesiaMonth(engMonth)
  let dateTime = {
    date: req.body.date,
    day,
    month,
    start: req.body.start,
    end: req.body.end,
  }

  req.body.enrolled = 0
  if (isFileExist) {
    req.body.image = {
      format: formatFile
    } 
  }
  req.body.date = dateTime
  delete req.body.start
  delete req.body.end 
  const _event = helper.objectManipulation.renameKey(req.body, 'date', 'dateTime')
  _event.userId = userId
  
  try {
    const newEvent = await service._event.create(_event, isFileExist)
    const allowedFileType = [
      'image/png',
      'image/jpeg',
      'image/jpg'
    ]

    let tags = []
    let tagIds = []
    if (req.body.tags !== undefined) {
      const requestedTags = req.body.tags.replace(/\s+/g, ' ').trim()
      if (requestedTags.includes(',')) {
        tags.push(...requestedTags.split(',').map((item) => item.trim()))
      } else {
        tags.push(requestedTags)
      }
      for (let i = 0; i < tags.length; i++) {
        const newTag = await service.tag.create('alumni', userId, tags[i])
        tagIds.push(newTag.id)
      }  
    }

    if (isFileExist) {
      const imageId = newEvent.image.id
      if(allowedFileType.includes(file.mimetype)) {
        const image = await service._event.upload(file.buffer, `event/${imageId}.${formatFile}`)
        
        return res.status(201).json({
          statusCode: 201,
          status: 'Created',
          result: {
            id: newEvent.id,
            userId: newEvent.userId,
            image: {
              id: newEvent.imageId,
              url: image.publicUrl,
            },
            tagIds: tagIds
          },
          message: 'Successfully created Event'
        })
      } 
    } else {
      return res.status(201).json({
        statusCode: 201,
        status: 'Created',
        result: {
          id: newEvent.id,
          userId: newEvent.userId,
          tagIds: tagIds
        },
        message: "Successfully created Event, but couldn't save image!"
      })
    }
  } catch(error) {
    console.log(error)
    res.status(400).json({
      statusCode: 400,
      status:"Bad Request",
      message: 'Failed to create event',
    })
  }
}