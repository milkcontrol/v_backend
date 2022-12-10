export default {
  post: {
    tags: ['Auth'],
    summary: 'verify registration code (by All)',
    operationId: 'verifyCode',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              code: {
                type: 'string',
                description: 'Code used for verification',
                example: '0123456',
              },
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
            properties: {
              code: {
                type: 'string',
                description: 'Code used for verification',
                example: '0123456',
              },
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
        description: 'Verification successful',
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
                  example: 'Verification successful!',
                },
              },
            },
          },
        },
      },
      '400': {
        description: 'Verification Fail !',
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
