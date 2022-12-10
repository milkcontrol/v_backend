export default {
  get: {
    tags: ['Stripe'],
    summary: 'list all cards of user',
    operationId: 'list all cards of user',
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
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'card Id',
                        example: 'card_1LbQBfEh7Ji9D0QuW4G0J5cK',
                      },
                      brand: {
                        type: 'string',
                        description: 'type of card',
                        example: 'Visa',
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
                      last4: {
                        type: 'number',
                        description: 'Last 4 digits of the card',
                        example: 2023,
                      },
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
