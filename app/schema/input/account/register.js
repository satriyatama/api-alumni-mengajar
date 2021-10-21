const joi = require('joi')

module.exports = register = joi.object({
  header: joi.object().unknown(),
  body: joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    passwordConfirmation: joi.any().valid(joi.ref('password')).required(),
    perguruanTinggi: joi.string().required(),
    jurusan: joi.string().required(),
    nim: joi.number().required(),
    angkatan: joi.number().required(),
    role: joi.string().valid('alumni', 'mahasiswa', 'admin').required()
  }).required(),
  query: joi.object().unknown(),
})
