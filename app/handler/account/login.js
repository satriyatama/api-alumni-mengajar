const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const config = require('../../../config')
const service = require('../../../service')

module.exports = async function login(req, res) {
  let { username } = req.body
  let user = await service.user.getUserByUsername(username)

  if (user === null) return res.status(401).json({
    statusCode: 401,
    status: 'Unauthorized',
    message: "Invalid username, please try again!"
  })

  let id = user.id
  let password = user.password

  if (user && bcrypt.compareSync(req.body.password, password)) {
    const token = jwt.sign({ id }, config.jwt.secretToken, { expiresIn: '1h' })
    return res.status(200).json({
      statusCode: 200,
      status: 'OK',
      token,
      role: user.role,
      message: 'Successfully login to the server'
      })
  } else {
    return res.status(401).json({
      statusCode: 401,
      status: 'Unauthorized',
      message: "Invalid Password please try again!"
    })
  }
}