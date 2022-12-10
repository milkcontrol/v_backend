export default {
  get: {
    tags: ['Address'],
    summary: 'get list all states (by All)',
    operationId: 'listStates',
    parameters: [
      {
        name: 'countryId',
        in: 'query',
        description: "to filter states ",
        required: true,
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
                      description: 'the id of states table',
                      example: 1,
                    },
                    name: {
                      type: 'string',
                      description: 'the name of state',
                      example: 'Southern Nations, Nationalities, and Peoples\' Region',
                    },
                    countryId: {
                      type: 'number',
                      description: 'the currency of state',
                      example: '6',
                    },
                    countryCode: {
                      type: 'string',
                      description: 'the currency name of state',
                      example: 'AD',
                    },
                    flipCode: {
                      type: 'string',
                      description: 'the currency name of state',
                      example: 'AD',
                    },
                    iso2: {
                      type: 'string',
                      description: 'the currency name of state',
                      example: 'AD',
                    },
                    latitude: {
                      type: 'number',
                      description: 'the latitude of state',
                      example: 33.00000000,
                    },
                    longitude: {
                      type: 'number',
                      description: 'the longitude of state',
                      example: 65.00000000,
                    },
                    flag: {
                      type: 'number',
                      description: 'the flag of state',
                      example: 1,
                    },
                    wikiDataId: {
                      type: 'string',
                      description: 'the wiki Data Id of state',
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
        description: "Get list states Fail !",
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
