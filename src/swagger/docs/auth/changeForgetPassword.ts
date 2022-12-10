export default {
  patch: {
    tags: ['Auth'],
    summary: 'change forget password to the system (by All)',
    operationId: 'changeForgetPass',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            require: [
              'newPassword',
              'confirmPassword',
              'forgetPassToken'
            ],
            properties: {
              newPassword: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string\n',
                example: 'newPassword@1',
              },
              confirmPassword: {
                type: 'string',
                description: 'The confirm new password and \'confirmPassword\' must be equal to \'password\'',
                example: 'newPassword@1',
              },
              forgetPassToken: {
                type: 'string',
                description: 'the forget pass Token to verify user',
                example: '977e13fa44af9303944d783da97c9cd4d306574473fbc64e35a8be928c75d14a776ade62abe962120afa72339122269f3f3dd17dd79caa3168b91f602a8e1c180d3ba50153deb034a2d80a7e213504e1c08b11cb0604728984fc9c60238a7eb3502b09b8a69db8e2fc2a6a9a32040c2afda59df82cf33ba651a57117ce988d93',
              },
              code: {
                type: 'string',
                description: 'Code used for verification',
                example: '0123456',
              },
            },
          },
        },
        'application/json': {
          schema: {
            type: 'object',
            require: [
              'newPassword',
              'confirmPassword',
              'forgetPassToken'
            ],
            properties: {
              newPassword: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string\n',
                example: 'newPassword@1',
              },
              confirmPassword: {
                type: 'string',
                description: 'The confirm new password and \'confirmPassword\' must be equal to \'password\'',
                example: 'newPassword@1',
              },
              forgetPassToken: {
                type: 'string',
                description: 'the forget pass Token to verify user',
                example: '977e13fa44af9303944d783da97c9cd4d306574473fbc64e35a8be928c75d14a776ade62abe962120afa72339122269f3f3dd17dd79caa3168b91f602a8e1c180d3ba50153deb034a2d80a7e213504e1c08b11cb0604728984fc9c60238a7eb3502b09b8a69db8e2fc2a6a9a32040c2afda59df82cf33ba651a57117ce988d93',
              },
              code: {
                type: 'string',
                description: 'Code used for verification',
                example: '0123456',
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
        description: 'Forget password Fail !',
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
}
