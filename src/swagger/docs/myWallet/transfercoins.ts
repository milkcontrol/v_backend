export default {
  post: {
    tags: ['My Wallet'],
    summary: 'Transfer coins to other user (by partner role)',
    operationId: 'Transfer coins ',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              coins: {
                type: 'number',
                description: 'num of coins to transfer',
                example: '20000',
              },
              receiverId: {
                type: 'string',
                description: "recipient's id",
                example: 'b786cd34-f45d-482a-8019-ae5d7f4bfff0',
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
                  type: 'string',
                  description: 'successfully',
                  example: 'successfully',
                },
              },
            },
          },
        },
      },
      '400': {
        description: 'Invalid params',
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
                  description: 'invalid amount',
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
      '500': {
        description: 'Invalid role',
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
                  description: 'ERROR',
                },
                message: {
                  type: 'string',
                  description: 'Error: permission deny',
                },
              },
            },
          },
        },
      },
    },
  },
};
