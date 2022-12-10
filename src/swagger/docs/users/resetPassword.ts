export default {
  patch: {
    tags: ['Users'],
    summary: 'reset password for user (by Admin)',
    operationId: 'resetPass',
    parameters: [
      {
        name: 'uuid',
        in: 'path',
        required: true,
        description: "Uuid of user (by Admin). eg: uuid=61b70e9cfd84fd885f9fade3",
        example: "",
        schema: {
          type: 'string',
        }
      },
    ],
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
        description: 'Login Fail !',
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
