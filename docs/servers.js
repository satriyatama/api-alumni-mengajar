const config = require('../config')

module.exports = {
  servers: [
    {
      url: `http://localhost:${config.app.port}`,
    },
    {
      url: 'https://api-alumni-mengajar.herokuapp.com'
    }
  ]
}