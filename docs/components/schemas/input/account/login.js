module.exports = {
  Login: {
      type:'object',
      properties: {
      username: {
        type:'string',
        example:'johndoe123'
      },
      password: {
        type:'string',
        format:'password',
        example:'12345678',
        minLength:8
      },
    },
    required: [
      'username',
      'password',
    ]
  }
}