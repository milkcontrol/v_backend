export default {
  post: {
    tags: ['Users'],
    summary: 'upload info pdone to the system (by PDone)',
    operationId: 'uploadInfo',
    parameters: [],
    requestBody: {
      description: '(CAUTION: Upload file image after upload field text)',
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            required: [
              'specificBankId',
              'accountNumber',
              'owner',
              'nextToken',
              'identityImageOne',
              'identityImageTwo',
              'identityImageThree',
            ],
            properties: {
              specificBankId: {
                type: 'number',
                description: 'the id of Specific Bank table',
                example: 1,
              },
              // protectorId: {
              //   type: 'number',
              //   description: 'The protectorId of user',
              //   example: 1,
              // },
              // parentId: {
              //   type: 'number',
              //   description: 'The parentId of user',
              //   example: 1,
              // },
              accountNumber: {
                type: 'string',
                description: 'the account number of user',
                example: '221376127312',
              },
              owner: {
                type: 'string',
                description: 'the owner of account bank',
                example: 'member',
              },
              nextToken: {
                type: 'string',
                description: 'the next token to link create pdone',
                example: 'ac68a55bcb3ac232089c997872a0e56...',
              },
              identityImageOne: {
                type: 'file',
                description: 'front photo of id card',
              },
              identityImageTwo: {
                type: 'file',
                description: 'back photo of id card',
              },
              identityImageThree: {
                type: 'file',
                description: 'photo of face and holding card',
              },
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'User create success',
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
                  description: 'response code',
                  example: 'SUCCESS',
                },
                data: {
                  properties: {
                    accessToken: {
                      type: 'string',
                      description: 'JSON Web Tokens',
                      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    },
                    refreshToken: {
                      type: 'string',
                      description: 'Token use to get access token',
                      example: '82725ba385deb7f2f0c1f0fe2cbebe48a...',
                    },
                  },
                },
                message: {
                  type: 'string',
                  description: 'response message',
                  example: 'The request was executed successfully',
                },
              },
            },
          },
        },
      },
      '400': {
        description: "Delete ingredients category Fail !",
        content: {
          'application/json': {
            schema: {
              $ref: "#/components/schemas/Error400"
            }
          }
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
    }
  }
}
