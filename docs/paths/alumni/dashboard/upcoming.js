module.exports = {
  get: {
    tags: ['Dashboard'],
    summary: "Alumni's upcoming event",
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      '200': {
        description: 'Successfully created Event',
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
                message:{
                  type: 'string',
                  example: "Successfully returned alumni's Upcoming Event",
                }
              }
            }
          }
        },
      },
    }
  }
}