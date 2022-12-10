export default {
  post: {
    tags: ['Stripe'],
    summary: 'create card token',
    operationId: 'create card token',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              number: {
                type: 'string',
                description: 'visa or master card number',
                example: '4242424242424242',
              },
              exp_month: {
                type: 'number',
                description: 'card expired month',
                example: 8,
              },
              exp_year: {
                type: 'number',
                description: 'card expired year',
                example: 2023,
              },
              cvc: {
                type: 'string',
                description: 'card cvc number',
                example: 343,
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
                    tokenId: {
                      type: 'string',
                      description: 'token response for create new card',
                      example: 'tok_1LbQsREh7Ji9D0QuudVYjRPn',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '401': {
        description: 'Invalid refresh token',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error401',
            },
          },
        },
      },
      '500': {
        description: 'Invalid card info',
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
                  example: 'Error: Your card number is incorrect.',
                },
              },
            },
          },
        },
      },
    },
  },
};
