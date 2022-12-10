export default {
  post: {
    tags: ['Users'],
    summary: 'user create to the system (by PDone)',
    operationId: 'createUser',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            require: ['username', 'password', 'firstName', 'lastName', 'policyId'],
            properties: {
              username: {
                type: 'string',
                description: 'use email or username',
                example: 'member@gmail.com',
              },
              password: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string',
                example: 'newPassword@1',
              },
              firstName: {
                type: 'string',
                description: 'The first name of user',
                example: 'member',
              },
              lastName: {
                type: 'string',
                description: 'The last name of user',
                example: 'member',
              },
              policyId: {
                type: 'number',
                description: 'The policies id eg: 1 ',
                example: 1,
              },
            },
          },

        },
        'application/json': {
          schema: {
            type: 'object',
            require: ['username', 'password', 'firstName', 'lastName', 'policyId'],
            properties: {
              username: {
                type: 'string',
                description: 'use email or username',
                example: 'member@gmail.com',
              },
              password: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string',
                example: 'newPassword@1',
              },
              firstName: {
                type: 'string',
                description: 'The first name of user',
                example: 'member',
              },
              lastName: {
                type: 'string',
                description: 'The last name of user',
                example: 'member',
              },
              policyId: {
                type: 'number',
                description: 'The policies id eg: 1',
                example: 1,
              },
            },
          },
        },
      }

    },
    responses: {
      '200': {
        description: 'User create success',
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
                    accessToken: {
                      type: 'string',
                      description: 'JSON Web Tokens',
                      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    },
                    refreshToken: {
                      type: 'string',
                      description: 'Token use to get access token',
                      example: '82725ba385deb7f2f0c1f0fe2cbebe48a...',
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
        description: "user create  Fail !",
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
