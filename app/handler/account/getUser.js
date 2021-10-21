const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const service = require('../../../service')

module.exports = async function getUser(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.decode(token).id
  const user = await service.user.getUserById(id)

  const result = {
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  }

  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result,
    message: "Successfully returned user's data"
  })
}