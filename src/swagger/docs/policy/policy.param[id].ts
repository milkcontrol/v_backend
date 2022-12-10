export default {
  get: {
    tags: ['Policy'],
    summary: 'get policies by userId (by Admin)',
    operationId: 'getPolicyById',
    parameters: [
      {
        name: 'id',
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
        description: 'Get policies success',
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
                policyType: {
                  type: 'number',
                  description: 'The type of policies include: 0 - user, 1 - pdone, 2 - supplier, 3 - pdone j, 4 - pdone A',
                  example: 0,
                },
                content: {
                  type: 'string',
                  description: 'The content of policies',
                  example: 'newPassword@1',
                },
              },
            },
          },
        },
      },
      '400': {
        description: "Get policies Fail !",
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
      '500': {
        description: 'Server error',
      },
    }
  },
}
