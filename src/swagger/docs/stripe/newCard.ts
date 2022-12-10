export default {
  post: {
    tags: ['Stripe'],
    summary: 'create new card',
    operationId: 'create new card ',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              source: {
                type: 'string',
                description:
                  'card token get from create card token api or stripe sdk ',
                example: 'tok_1LbQsREh7Ji9D0QuudVYjRPn',
              },
            },
          },
        },
      },
    },
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
                    cardId: {
                      type: 'string',
                      description: 'id of card created. use to create payment.',
                      example: 'card_1LbQsREh7Ji9D0Qu5H95syfE',
                    },
                  },
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
        description:
          'No such token or You cannot use a Stripe token more than once',
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
                    'error message from stripe api. See the API reference for more information: https://stripe.com/docs/api#token_object',
                  example:
                    'Error: You cannot use a Stripe token more than once: tok_1LbQBfEh7Ji9D0QuD6QqifEQ.',
                },
              },
            },
          },
        },
      },
    },
  },
};
