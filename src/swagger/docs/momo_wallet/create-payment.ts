export default {
  post: {
    tags: ['Mo Mo Wallet'],
    summary: 'Create Coins Payment (by all)',
    operationId: 'Create Coins Payment ',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              amount: {
                type: 'number',
                min: 1000,
                max: 5000000,
                description: 'Total Amount. Min 10000. max 5000000',
                example: '50000',
              },
              redirect_url: {
                type: 'string',
                description: 'url app or web redirect after payment success',
                example: 'myapp://',
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
                partnerCode: {
                  type: 'string',
                  description: 'momo partner code',
                  example: 'MOMOB2LZ20220819',
                },
                orderId: {
                  type: 'string',
                  description: 'order id for payment (userId_time)',
                  example: '057c34f0-ee23-4565-94ca-b692822870e1_1661100279897',
                },
                requestId: {
                  type: 'string',
                  description: 'request id for payment (userId_time)',
                  example: '057c34f0-ee23-4565-94ca-b692822870e1_1661100279897',
                },
                amount: {
                  type: 'string',
                  description: 'total amount',
                  example: '50000',
                },
                responseTime: {
                  type: 'number',
                  description: 'time of momo server create payment',
                  example: 1661100280104,
                },
                message: {
                  type: 'string',
                  description: 'status for url payment',
                  example: 'Giao dịch thành công.',
                },
                resultCode: {
                  type: 'number',
                  description: 'result code',
                  example: 0,
                },
                payUrl: {
                  type: 'string',
                  description:
                    'Payment link used for users to pay via momo app.',
                  example:
                    'https://test-payment.momo.vn/v2/gateway/pay?t=TU9NT0IyTFoyMDIyMDgxOXwwNTdjMzRmMC1lZTIzLTQ1NjUtOTRjYS1iNjkyODIyODcwZTFfMTY2MTEwMjc5MTU4Nw==',
                },
              },
            },
          },
        },
      },
      '400': {
        description: 'Invalid amount or redirect url',
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
    },
  },
};
