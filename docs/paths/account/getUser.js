module.exports = {
  get: {
    tags: ['Account'],
    summary: 'Get Current (Logged in) User Data',
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      '200': {
        description: "Getting user's data",
        content: {
          'application/json': {
            schema: {
              type: 'object',
              'properties': {
                statusCode:{
                  type: 'integer',
                  example: 200,
                },
                status: {
                  type: 'string',
                  example: 'OK',
                },
                result: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      example: "2d354fd3-4ad4-412f-8d73-a18d7c13ba0c",
                    },
                    username: {
                      type: 'string',
                      example: 'user123'
                    },
                    firstName: {
                      type: 'string',
                      example: 'user',
                    },
                    lastName: {
                      type: 'string',
                      example: 'example'
                    }
                  }
                },
                message:{
                  type: 'string',
                  example: "Successfully returned user's data"
                },
              }
            }
          }
        }
      }
    }
  }
}