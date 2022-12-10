export default {
  get: {
    tags: ['Users'],
    summary: 'get user to the system (by All)',
    operationId: 'findUser',
    parameters: [
      {
        name: 'publicId',
        in: 'query',
        description: 'publicId of user (by User) ',
        example: '',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'firstName',
        in: 'query',
        description: 'first name of user (by User)',
        example: '',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'lastName',
        in: 'query',
        description: 'last name of user (by User)',
        example: '',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'displayName',
        in: 'query',
        description: 'display name of user (by User)',
        example: '',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'phoneNumber',
        in: 'query',
        description: 'phoneNumber of user (by User) ',
        example: '',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'orderBy',
        in: 'query',
        description: 'phoneNumber of user (by User) ',
        example: 'id',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'orderType',
        in: 'query',
        description: 'phoneNumber of user (by User) ',
        example: 'ASC',
        schema: {
          enum: ['ASC', 'DESC'],
        },
      },
      {
        name: 'pageNumber',
        require: true,
        in: 'query',
        description: 'page number pagination ',
        example: 0,
        schema: {
          type: 'string',
        },
      },
      {
        name: 'itemsPerPage',
        require: true,
        in: 'query',
        description: 'items per Page pagination',
        example: 10,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      '200': {
        description: 'get profile success',
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
                    firstName: {
                      type: 'string',
                      description: 'The first name of user',
                      example: 'member',
                    },
                    lastName: {
                      type: 'string',
                      description: 'The last name of user',
                      example: 'member',
                    },
                    displayName: {
                      type: 'string',
                      description: 'The display name of user',
                      example: 'member',
                    },
                    phoneNumber: {
                      type: 'string',
                      description: 'The phone number of user',
                      example: '0999999999',
                    },
                    email: {
                      type: 'string',
                      description: 'The email of user',
                      example: 'member@gmail.com',
                    },
                    birthday: {
                      type: 'string',
                      description: 'The birthday of user',
                      example: 'July 4 1776 12:30',
                    },
                    identityNumber: {
                      type: 'string',
                      description: 'The identity number id card of user',
                      example: '1234567890-0987654321',
                    },
                    dayRelease: {
                      type: 'string',
                      description: 'The day release id card of user',
                      example: 'July 4 1976 12:30',
                    },
                    placeRelease: {
                      type: 'string',
                      description: 'The place release id card of user',
                      example: 'HN',
                    },
                    countryId: {
                      type: 'string',
                      description: 'The country id to query',
                      example: 'Viet Nam',
                    },
                    cityId: {
                      type: 'string',
                      description: 'The city Id to query',
                      example: 'Ha Noi',
                    },
                    stateId: {
                      type: 'string',
                      description: 'The state Id to query',
                      example: 'Ha Noi',
                    },
                    specificAddress: {
                      type: 'string',
                      description: 'The specific address of user',
                      example: '123 Nguyen Street',
                    },
                    height: {
                      type: 'string',
                      description: 'The height of user',
                      example: 123,
                    },
                    width: {
                      type: 'string',
                      description: 'The width of user',
                      example: 123,
                    },
                    bloodTypeId: {
                      type: 'number',
                      description: 'The blood group of user',
                      example: 1,
                    },
                    maritalStatus: {
                      type: 'string',
                      description: 'The marital status of user',
                      example: 'none',
                    },
                    education: {
                      type: 'string',
                      description: 'The education of user',
                      example: 'university',
                    },
                    job: {
                      type: 'string',
                      description: 'The job of user',
                      example: 'developer',
                    },
                    interests: {
                      type: 'string',
                      description: 'The interests of user',
                      example: 'none',
                    },
                    talent: {
                      type: 'string',
                      description: 'The talent of user',
                      example: 'none',
                    },
                    protector: {
                      type: 'string',
                      description: 'The protector of user',
                      example: 'mom',
                    },
                    parentId: {
                      type: 'string',
                      description: 'The parentId of user',
                      example: '4',
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
        description: "get user Fail !",
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
