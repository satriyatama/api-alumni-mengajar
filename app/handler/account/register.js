const bcrypt = require('bcrypt')

const service = require('../../../service')

module.exports = async function register(req, res) {
  let userData = req.body 
  userData.password = bcrypt.hashSync(userData.password, 10)

  let newUser = await service.user.create(userData)

  return res.status(201).json({
    statusCode: 201,
    status: 'Created',
    result: {
      userId: newUser.id,
    },
    message: "Account Successfully Created"
  })
}