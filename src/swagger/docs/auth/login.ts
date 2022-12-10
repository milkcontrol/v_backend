export default {
  post: {
    tags: ['Auth'],
    summary: 'login to the system (by All)',
    operationId: 'userLogin',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            required: ["username","password"],
            type: 'object',
            properties: {
              username: {
                type: 'string',
                description: 'use email or username',
                example: 'member@gmail.com',
              },
              password: {
                type: 'string',
                description: 'The password of user',
                example: 'member',
              },
            },
          },
        },
        'application/json': {
          schema: {
            type: 'object',
            required: ["username","password"],
            properties: {
              username: {
                type: 'string',
                description: 'use email or username',
                example: 'member@gmail.com',
              },
              password: {
                type: 'string',
                description: 'The password of user',
                example: 'member',
              },
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Login success',
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
        description: 'Login Fail !',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error400',
            },
          },
        },
      },
      '500': {
        description: 'Server error',
      },
    },
  },
};
