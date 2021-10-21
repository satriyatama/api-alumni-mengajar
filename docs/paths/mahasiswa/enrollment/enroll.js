module.exports = {
  post: {
    tags: ['Mahasiswa'],
    summary: 'Enroll an Event',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        in: 'path',
        name: 'eventId',
        'schema': {
          type: 'string'
        },
        required: true
      }
    ],
    responses: {
      '201': {
        description: 'Successfully created Event',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode: {
                  example: 201,
                  type: 'integer'
                },
                status: {
                  example: "Created",
                  type: 'string'
                },
                result: {
                  type: 'object',
                  properties: {
                    enrollId : {
                      type: 'string',
                      example: "660f7c10-d0ce-41e6-a02b-4c44a5239c9c",
                    }
                  }
                },
                message:{
                  type: 'string',
                  example: "Succesfully enrolled event",
                }
              }
            }
          }
        },
      },
    }
  }
}