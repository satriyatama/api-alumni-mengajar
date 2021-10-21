module.exports = {
  post: {
    tags: ['Event'],
    summary: 'Create event for Alumni',
    security: [
      {
        bearerAuth: []
      }
    ],
    requestBody: {
      required: true
    },
    requestBody: {
      requred: true,
      content: {
        'multipart/form-data': {
          schema: {
            $ref: '#/components/schemas/CreateEvent'
          }
        }
      },
    },
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
                    id : {
                      type: 'string',
                      example: "660f7c10-d0ce-41e6-a02b-4c44a5239c9c",
                    },
                    userId: {
                      type: 'string',
                      example: "2d354fd3-4ad4-412f-8d73-a18d7c13ba0c",
                    },
                    image: {
                      type: 'object',
                      properties: {
                        imageId: {
                          type: 'string',
                          example: "6d1273d1-d0bb-4521-ac22-9b533d3a2b74",
                        },
                        imageUrl: {
                          type: 'string',
                          example: 'https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/6d1273d1-d0bb-4521-ac22-9b533d3a2b74.jpg'
                        }
                      }
                    }
                  }
                },
                message:{
                  type: 'string',
                  example: "Succesfully created Event",
                }
              }
            }
          }
        },
      },
      '200': {
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
                    id : {
                      type: 'string',
                      example: "660f7c10-d0ce-41e6-a02b-4c44a5239c9c",
                    },
                    userId: {
                      type: 'string',
                      example: "2d354fd3-4ad4-412f-8d73-a18d7c13ba0c",
                    },
                  }
                },
                message:{
                  type: 'string',
                  example: "Succesfully created Event, but couldn't save image!",
                }
              }
            }
          }
        },
      },
      '400' : {
        description: 'Failed to create Event',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode:{
                  type: 'integer',
                  example: 400,
                },
                status: {
                  type: 'string',
                  example: 'Bad Request',
                },
                message:{
                  type: 'string',
                  example: 'Failed to create event'
                },
              }
            }
          }
        }
      }
    }
  }
}