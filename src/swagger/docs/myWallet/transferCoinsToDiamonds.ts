export default {
  post: {
    tags: ['My Wallet'],
    summary: 'convert coins to diamonds (all user)',
    operationId: 'convert coins to diamonds ',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              coins: {
                type: 'number',
                description: 'num of coins to convert',
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
        description: 'Invalid params or not enough coins',
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
                  description: 'invalid coins number',
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
