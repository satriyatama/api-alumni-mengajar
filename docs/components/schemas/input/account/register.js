const luxon = require('luxon')

module.exports = {
  Register: {
    type:'object',
    properties: {
      firstName: {
        type:'string',
        example: 'John'
      },
      lastName: {
        type:'string',
        example: 'Doe'
      },
      username: {
        type:'string',
        example:'johndoe123'
      },
      email: {
        type:'string',
        format:'email',
        example:'johndoe@gmail.com'
      },
      password: {
        type:'string',
        format:'password',
        example:'12345678',
        minLength:8
      },
      passwordConfirmation: {
        type:'string',
        format:'password',
        example:'12345678',
        minLength:8
      },
      perguruanTinggi: {
        type:'string',
        example:'Universitas Gadjah Mada'
      },
      jurusan: {
        type:'string',
        example:'Ilmu Komputer'
      },
      nim: {
        type:'integer',
        example:1234567890,
        minLength:8
      },
      angkatan: {
        type:'integer',
        maximum: luxon.DateTime.now().year,
        example:2020
      },
      role: {
        type:'string',
        enum: [
          'mahasiswa',
          'alumni',
          'admin',
        ],
        example:'mahasiswa'
      },
    },
    required: [
      'firstName',
      'lastName',
      'username',
      'password',
      'passwordConfirmation',
      'perguruanTinggi',
      'jurusan',
      'angkatan',
      'role'
    ]
  }
}