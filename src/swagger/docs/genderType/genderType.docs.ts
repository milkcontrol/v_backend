export default {
    get: {
      tags: ['GenderTypes'],
      summary: 'get list all GenderTypes (by All)',
      operationId: 'listBloodType',
      parameters: [],
      responses: {
        '200': {
          description: 'Get List success',
          headers: {
            'Set-Cookie': {
              description: 'set token to cookies',
              type: 'string',
            },
          },
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  code: {
                    type: 'string',
                    description: 'response code',
                    example: 'SUCCESS',
                  },
                  data: {
                    properties: {
                      id: {
                        type: 'number',
                        description: 'the id of GenderTypes',
                        example: 1,
                      },
                      name: {
                        type: 'string',
                        description: 'the name of GenderTypes',
                      },
                    },
                  },
                  message: {
                    type: 'string',
                    description: 'response message',
                    example: 'The request was executed successfully',
                  },
                },
              },
            },
          },
        },
        '400': {
          description: "Get list Protectors Fail !",
          content: {
            'application/json': {
              schema: {
                $ref: "#/components/schemas/Error400"
              }
            }
          },
        },
        '401': {
          description: "Permission Fail !",
          content: {
            'application/json': {
              schema: {
                $ref: "#/components/schemas/Error401"
              }
            }
          },
        },
        '422': {
          description: "Invalid Fields !",
          content: {
            'application/json': {
              schema: {
                $ref: "#/components/schemas/Error422"
              }
            }
          },
        },
        '500': {
          description: 'Server error',
        },
      }
    }
  }
  