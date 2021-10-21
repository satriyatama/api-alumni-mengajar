const jwt = require('jsonwebtoken')

const config = require('../../../config')

module.exports = jsonwebtoken = (req, res, next) => {
  const headerAuthorization = req.headers.authorization
  if (headerAuthorization === undefined) return res.status(401).json({
    statusCode: 400,
    status: 'Bad Request',
    message: 'Access Denied'
  })
  
  const token = headerAuthorization.split(' ')[1]
  if (!token) return res.status(401).json({
    statusCode: 400,
    status: 'Bad Request',
    message: 'Access Denied'
  })
  try {
    const verified = jwt.verify(token, config.jwt.secretToken)
    req.user = verified
    next()
  } catch(error) {
    res.status(400).json({
      statusCode: 400,
      status: 'Bad Request',
      message: error
    })
  }
}
