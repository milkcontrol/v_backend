export default {
  patch: {
    tags: ['Admin'],
    summary: 'approve user to the system (by Admin)',
    operationId: 'approveUser',
    parameters: [
      {
        name: 'userId',
        in: 'query',
        require: true,
        description: "the user id of user",
        schema: {
          type: 'string',
        },
        example: 'db34fcdc-626c-4781-8416-509a33e1887a',
      },
      {
        name: 'userStatus',
        require: true,
        in: 'query',
        description: "the user status 0- created, 1- approve, 2- pending, 3- rejected",
        schema: {
          type: 'number',
        },
        example: 1,
      },
    ],
    responses: {
      '200': {
        description: "approve user success!",
        content: {
          'application/json': {
            schema: {
              $ref: "#/components/schemas/Success200"
            }
          }
        },
      },
      '400': {
        description: "approve user Fail !",
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
            },
          },
        },
      },
      '500': {
        description: 'Server error',
      },
    }
  }
}
