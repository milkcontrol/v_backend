export default {
  get: {
    tags: ['Address'],
    summary: 'get list all cites (by All)',
    operationId: 'listCites',
    description: 'required countryId or stateId or both',
    parameters: [
      {
        name: 'countryId',
        in: 'query',
        description: "to filter city",
        schema: {
          type: 'string',
          default: '',
        }
      },
      {
        name: 'stateId',
        in: 'query',
        description: "to filter city",
        schema: {
          type: 'string',
          default: '',
        }
      },
    ],

    responses: {
      '200': {
        description: 'Get list Cites success',
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
                    id: {
                      type: 'number',
                      description: 'the id of cities table',
                      example: 1,
                    },
                    name: {
                      type: 'string',
                      description: 'the name of city',
                      example: 'Andorra la Vella',
                    },
                    stateId: {
                      type: 'number',
                      description: 'the numeric code of city',
                      example: '004',
                    },
                    stateCode: {
                      type: 'string',
                      description: 'the phone code of city',
                      example: '07',
                    },
                    countryId: {
                      type: 'number',
                      description: 'the currency of city',
                      example: '6',
                    },
                    countryCode: {
                      type: 'string',
                      description: 'the currency name of city',
                      example: 'AD',
                    },
                    latitude: {
                      type: 'number',
                      description: 'the latitude of city',
                      example: 33.00000000,
                    },
                    longitude: {
                      type: 'number',
                      description: 'the longitude of city',
                      example: 65.00000000,
                    },
                    flag: {
                      type: 'number',
                      description: 'the flag of city',
                      example: 1,
                    },
                    wikiDataId: {
                      type: 'string',
                      description: 'the wiki Data Id of city',
                      example: 'Q889',
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
        description: "Get list cities Fail !",
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
