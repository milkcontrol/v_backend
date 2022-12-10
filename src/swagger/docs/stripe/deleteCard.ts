export default {
  delete: {
    tags: ['Stripe'],
    summary: 'delete card',
    operationId: 'delete card ',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'card ID',
        example: 'card_1LbQBfEh7Ji9D0QuW4G0J5cK',
        schema: {
          type: 'string',
        },
      },
    ],
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
                  type: 'string',
                  description: 'deleted',
                  example: 'deleted',
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
        description: ' No such source',
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
                  description: 'ERROR',
                  example: 'ERROR',
                },
                message: {
                  type: 'string',
                  description:
                    'Error: No such source: "card_1Lb4o5Eh7Ji9D0QuQJwAVEKD"',
                  example: 'deleted',
                },
              },
            },
          },
        },
      },
    },
  },
};
