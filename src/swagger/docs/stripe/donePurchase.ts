export default {
  post: {
    tags: ['Stripe'],
    summary: 'done purchase',
    operationId: 'done purchase',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              cardId: {
                type: 'string',
                description: 'card Id get from card list',
                example: 'card_1LcAr3Eh7Ji9D0QuLtUcR0wV',
              },
              amount: {
                type: 'number',
                min: 1,
                description: 'purchase amount(usd)',
                example: 10,
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
                  type: 'string',
                  description: 'charge successfully',
                  example: 'charge successfully',
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
      '400': {
        description: 'invalid body params',
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
                  description: 'invalid cardId or amount',
                  example: 'invalid cardId',
                },
              },
            },
          },
        },
      },
      '500': {
        description: 'stripe card error or stripe card payment reject',
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
                  description: 'error message from stripe api.',
                  example:
                    'Error: Customer cus_MKqYGDYBaLdLFY does not have a linked source with ID',
                },
              },
            },
          },
        },
      },
    },
  },
};
