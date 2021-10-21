module.exports = {
  post: {
    tags: ['Account'],
    summary: 'Login Account',
    requestBody: {
      required: true
    },
    requestBody: {
      requred: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: '#/components/schemas/Login'
          }
        }
      },
    },
    responses: {
      '200': {
        description: 'Login Succeed',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                token: {
                  example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiMWU2NzVhLTE5YTgtNDc1ZC04ZDgwLWU2NGMyZGJhYzM0NCIsImlhdCI6MTYzMTEwMjExNSwiZXhwIjoxNjMxMTAzMDE1fQ.aVYxP3oX085ARTLivfPVStxPJ0yBBy5HaaU-uTeMvFs',
                  type: 'string',
                  description:'JSON Web Token (JWT). Use to Authorize Account!'
                }
              }
            }
          }
        }
      },
      '400' : {
        description: 'Failed to login, please try again!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode:{
                  type: 'integer',
                  example: 401,
                },
                status: {
                  type: 'string',
                  example: 'Unauthorized',
                },
                message:{
                  type: 'string',
                  example: 'Invalid Password please try again!'
                },
              }
            }
          }
        }
      }
    },
  }
}