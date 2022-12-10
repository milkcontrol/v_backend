export default {
  post: {
    tags: ['Auth'],
    summary: 'resend code (by All)',
    operationId: 'resendCode',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            required: ['nextToken'],
            properties: {
              nextToken: {
                type: 'string',
                description: 'Token used to verify user',
                example: '82725ba385deb7f2f0c1f0fe2cbebe48a...',
              },
            },
          },
        },
        'application/json': {
          schema: {
            type: 'object',
            required: ['nextToken'],
            properties: {
              nextToken: {
                type: 'string',
                description: 'Token used to verify user',
                example: '82725ba385deb7f2f0c1f0fe2cbebe48a...',
              },
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Resend successful',
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
                  type: 'string',
                  description: 'Returns a message to the user',
                  example: 'resend successful!',
                },
              },
            },
          },
        },
      },
      '400': {
        description: 'Resend Fail !',
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
