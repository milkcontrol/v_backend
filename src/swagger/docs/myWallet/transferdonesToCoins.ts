export default {
  post: {
    tags: ['My Wallet'],
    summary: 'convert dones to coins (all user)',
    operationId: 'convert dones to coins ',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              dones: {
                type: 'number',
                description: 'num of dones to convert',
                example: 10,
              },
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'create url payment success',
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
                  description: 'SUCCESS',
                  example: 'SUCCESS',
                },
                data: {
                  type: 'null',
                  description: 'no response data',
                  example: null,
                },
              },
            },
          },
        },
      },
      '400': {
        description: 'Invalid params or not enough dones',
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
                errorCode: {
                  type: 'string',
                  description: 'E_REQUEST',
                },
                message: {
                  type: 'string',
                  description: 'invalid dones number',
                },
              },
            },
          },
        },
      },
      '401': {
        description: 'Invalid token',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error401',
            },
          },
        },
      },
    },
  },
};
