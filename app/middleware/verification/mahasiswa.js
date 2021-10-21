const jwt = require('jsonwebtoken')

const service = require('../../../service')

module.exports = mahasiswa = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.decode(token).id
  const user = await service.user.getUserById(id)
  const role = await user.role

  if (role !== 'mahasiswa') return res.status(403).json({
    statusCode: 403,
    status: 'Forbidden', 
    message: 'Please login as Mahasiswa'
  })
  
  next()
}