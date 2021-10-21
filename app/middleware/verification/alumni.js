const jwt = require('jsonwebtoken')

const service = require('../../../service')

module.exports = alumni = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.decode(token).id
  const user = await service.user.getUserById(id)
  const role = await user.role

  if (role !== 'alumni') return res.status(403).json({
    statusCode: 403,
    status: 'Forbidden',
    message: 'Please login as Alumni'
  })
  next()
}