export default {
  get: {
    tags: ['SpecificBank'],
    summary: 'get list all Specific Bank (by All)',
    operationId: 'listSpecificBank',
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
                    name: {
                      type: 'string',
                      description: 'The Bank Name',
                      example: 'Quan doi',
                    },
                    branchName: {
                      type: 'string',
                      description: 'The branch name of bank',
                      example: 'MB',
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
        description: "Get list countries Fail !",
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
