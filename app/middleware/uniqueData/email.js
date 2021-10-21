const service = require('../../../service')

module.exports = email = async (req, res, next) => { 
    let { email } = req.body
    let user = await service.user.getUserByEmail(email)
    if (user) return res.status(409).json({
      statusCode: 409,
      status: 'Conflict',
      message: 'Email has already been taken'
    })
    else next()
}