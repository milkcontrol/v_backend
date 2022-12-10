export default {
  get: {
    tags: ['Mo Mo Wallet'],
    summary: 'get Coins  (by all)',
    operationId: 'get Coins of user ',
    responses: {
      '200': {
        description: 'success',
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
                  type: 'object',
                  properties: {
                    userId: {
                      type: 'string',
                      description: 'userId',
                      example: '057c34f0-ee23-4565-94ca-b692822870e1',
                    },
                    coins: {
                      type: 'number',
                      description: 'num of coins',
                      example: 100000,
                    },
                    locale: {
                      type: 'string',
                      description: 'local currency unit',
                      example: 'VND',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '401': {
        description: 'Invalid  token',
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
