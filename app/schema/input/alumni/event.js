const joi = require('joi')

module.exports = _event = joi.object({
  header: joi.object().unknown(),
  body: joi.object({
    title: joi.string().required(),
    description: joi.string(),
    date: joi.date().min('now').required(),
    start: joi.string().pattern(new RegExp('([0-1]?[0-9]|2[0-3]):[0-5][0-9]')).required(),
    end: joi.string().pattern(new RegExp('([0-1]?[0-9]|2[0-3]):[0-5][0-9]')).required(),
    capacity: joi.number().required(),
    description: joi.string(),
    price: joi.number().required(),
    link: joi.string().required(),
    tags: joi.string(),
  }),
  files: joi.array(),
  query: joi.object().unknown(),
})