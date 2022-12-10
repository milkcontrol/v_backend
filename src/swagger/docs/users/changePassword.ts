export default {
  patch: {
    tags: ['Users'],
    summary: 'update profile (by User)',
    operationId: 'changePassword',
    parameters: [],
    security: [{
      bearerAuth: []
    }],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            require:['oldPassword','newPassword','confirmPassword','isRevokeAll'],
            properties: {
              oldPassword: {
                type: 'string',
                description: 'The old password of user',
                example: 'password#A1',
              },
              newPassword: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string',
                example: 'newPassword@1',
              },
              confirmPassword: {
                type: 'string',
                description: 'The confirm new password and \'confirmPassword\' must be equal to \'password\'r',
                example: 'newPassword@1',
              },
              isRevokeAll: {
                type: 'number',
                description: 'choose to revoke tokens or not ( 0 or 1 )',
                enum: [0, 1],
              }
            },
          },
        },
        'application/json': {
          schema: {
            type: 'object',
            require:['oldPassword','newPassword','confirmPassword','isRevokeAll'],
            properties: {
              oldPassword: {
                type: 'string',
                description: 'The old password of user',
                example: 'password#A1',
              },
              newPassword: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string',
                example: 'newPassword@1',
              },
              confirmPassword: {
                type: 'string',
                description: 'The confirm new password and \'confirmPassword\' must be equal to \'password\'r',
                example: 'newPassword@1',
              },
              isRevokeAll: {
                type: 'boolean',
                description: 'choose to revoke tokens or not',
                example: false,
              },
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Success !',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Success200',
            },
          },
        },
      },
      '400': {
        description: 'Change password Fail !',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error400',
            },
          },
        },
      },
      '401': {
        description: "Permission Fail !",
        content: {
          'application/json': {
            schema: {
              $ref: "#/components/schemas/Error401"
            }
          }
        },
      },
      '422': {
        description: "Invalid Fields !",
        content: {
          'application/json': {
            schema: {
              $ref: "#/components/schemas/Error422"
            }
          }
        },
      },
      '500': {
        description: 'Server error',
      },
    },
  }
};
