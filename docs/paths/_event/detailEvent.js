module.exports = {
  get: {
    tags: ['Event'],
    summary: 'Getdetail event from specific eventId',
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
      '200': {
        description: "Successfully returned detail event",
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode: {
                  example: 200,
                  type: 'integer'
                },
                status: {
                  example: "OK",
                  type: 'string'
                },
                result: {
                  type: 'object',
                  properties: {
                    event: {
                      type: 'object',
                      properties: {
                        id : {
                          type: 'string',
                          example: "25ba78e3-d5e7-4be5-a3a0-91f0396e545b",
                        },
                        title: {
                          type: 'string',
                          example: "Title Example",
                        },
                        date: {
                          type: 'string',
                          example: 'Senin, 01 September 2021'
                        },
                        price: {
                          type: 'number',
                          example: 100000,
                        },
                        enrolled: {
                          type: 'integer',
                          example: 30,
                        },
                        capacity: {
                          type: 'integer',
                          example: 100,
                        },
                        speaker: {
                          type: 'string',
                          example: 'Alumni A'
                        },
                        tags: {
                          type: 'array',
                          items: {
                            type: 'string',
                            example: ['Ekonomo', 'Budaya']
                          }
                        },
                        imageUrl: {
                          type: 'string',
                          example: 'https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/6d1273d1-d0bb-4521-ac22-9b533d3a2b74.jpg'
                        },
                        alumni: {
                          type: 'object',
                          properties: {
                            id:{
                              type: 'string',
                              example: 'cc4bb829-2edc-4989-b14e-e060be7f6214',
                            },
                            name:{
                              type: 'string',
                              example: 'Alumni A',
                            },
                          }
                        },
                        mahasiswa: {
                          type: 'object',
                          properties: {
                            id:{
                              type: 'string',
                              example: 'cc4bb829-2edc-4989-b14e-e060be7f6214',
                            },
                            isEnrolled:{
                              type: 'boolean',
                              example: false,
                            },
                          }
                        },
                      }
                    }
                  },
                },
                message:{
                  type: 'string',
                  example: "Successfully returned detail event",
                }
              }
            }
          }
        }
      },
      '404' : {
        description: 'Failed to return detail event',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode:{
                  type: 'integer',
                  example: 404,
                },
                status: {
                  type: 'string',
                  example: 'Not Found',
                },
                message:{
                  type: 'string',
                  example: 'Invalid Event Id! Failed to return detail event'
                },
              }  
            }
          }
        }
      }
    }
  }
}