export default {
    post: {
      tags: ['Auth'],
      summary: 'login facebook to the system (by All)',
      operationId: 'facebookLogin',
      parameters: [],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                  description: 'the code of facebook',
                  example: '4/0ARtbsJprynNrHnBbuLv6AY....',
                },
              },
            },
          },
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                  description: 'the code of google',
                  example: '4/0ARtbsJprynNrHnBbuLv6AY....',
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
  