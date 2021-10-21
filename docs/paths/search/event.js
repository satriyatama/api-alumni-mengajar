module.exports = {
  get: {
    tags: ['Search'],
    summary: 'Search event in related keywords',
    parameters: [
      {
        in: 'query',
        name: 'q',
        'schema': {
          type: 'string',
          description: 'Keywords for searching into specific events that contaning such information in title, alumni, and tags'
        }
      }
    ],
    responses: {
      '200': {
        description: 'Successfully Returned Searched Content',
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
                  type: 'array',
                  items: {
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
                      enrolled: {
                        type: 'integer',
                        example: 30,
                      },
                      capacity: {
                        type: 'integer',
                        example: 100,
                      },
                      seatRemaining: {
                        type: 'integer',
                        example: 70,
                      },
                      imageUrl: {
                        type: 'string',
                        example: 'https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/6d1273d1-d0bb-4521-ac22-9b533d3a2b74.jpg'
                      },
                    }
                  },
                  message:{
                    type: 'string',
                    example: "Successfully Returned Searched Content",
                  }
                }
              }
            }
          },
        },
        '400' : {
          description: 'Failed to return desired content for specific keywords',
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
                    example: 'Failed to search content! No such content for this keyword'
                  },
                }  
              }
            }
          }
        }
      }
    }
  }
}