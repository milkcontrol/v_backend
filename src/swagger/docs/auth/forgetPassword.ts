export default {
  patch: {
    tags: ['Auth'],
    summary: 'forget password to the system (by All)',
    operationId: 'forgetPass',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            required: [
              "username",
            ],
            properties: {
              username: {
                type: 'string',
                description: 'use email or username',
                example: 'member@gmail.com',
              },
            },
          },
        },
        'application/json': {
          schema: {
            type: 'object',
            require: ['username'],
            properties: {
              username: {
                type: 'string',
                description: 'use email or username',
                example: 'member@gmail.com',
              },
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: ' success',
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
                    message: {
                      type: 'string',
                      example: 'Otp code sent for you. Please check your email for the activation code.',
                    },
                    nextToken: {
                      type: 'string',
                      description: 'Token to verify',
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
        description: 'Forget password Fail !',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error400',
            },
          },
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
    },
  },
};
