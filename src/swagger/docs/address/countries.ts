export default {
  get: {
    tags: ['Address'],
    summary: 'get list all countries (by All)',
    operationId: 'listCountries',
    parameters: [],
    responses: {
      '200': {
        description: 'Get List success',
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
                      description: 'the id of countries table',
                      example: 1,
                    },
                    iso2: {
                      type: 'string',
                      description: 'the iso2 of country',
                      example: 'AF',
                    },
                    iso3: {
                      type: 'string',
                      description: 'the iso3 of country',
                      example: 'AFG',
                    },
                    name: {
                      type: 'string',
                      description: 'the name of country',
                      example: 'Afghanistan',
                    },
                    numericCode: {
                      type: 'string',
                      description: 'the numeric code of country',
                      example: '004',
                    },
                    phonecode: {
                      type: 'string',
                      description: 'the phone code of country',
                      example: '93',
                    },
                    currency: {
                      type: 'string',
                      description: 'the currency of country',
                      example: 'AFN',
                    },
                    currencyName: {
                      type: 'string',
                      description: 'the currency name of country',
                      example: 'Afghan afghani',
                    },
                    currencySymbol: {
                      type: 'string',
                      description: 'the currency symbol of country',
                      example: '؋',
                    },
                    tld: {
                      type: 'string',
                      description: 'the tld of country',
                      example: '.af',
                    },
                    native: {
                      type: 'string',
                      description: 'the native of country',
                      example: 'افغانستان',
                    },
                    region: {
                      type: 'string',
                      description: 'the region of country',
                      example: 'Asia',
                    },
                    subregion: {
                      type: 'string',
                      description: 'the subregion of country',
                      example: 'Southern Asia',
                    },
                    timezones: {
                      type: 'string',
                      description: 'the timezones of country',
                      example: '[{\"zoneName\":\"Asia/Kabul\",\"gmtOffset\":16200,\"gmtOffsetName\":\"UTC+04:30\",\"abbreviation\":\"AFT\",\"tzName\":\"Afghanistan Time\"}]',
                    },
                    translations: {
                      type: 'string',
                      description: 'the translations of country',
                      example: '{\"kr\":\"아프가니스탄\",\"pt-BR\":\"Afeganistão\",\"pt\":\"Afeganistão\",\"nl\":\"Afghanistan\",\"hr\":\"Afganistan\",\"fa\":\"افغانستان\",\"de\":\"Afghanistan\",\"es\":\"Afganistán\",\"fr\":\"Afghanistan\",\"ja\":\"アフガニスタン\",\"it\":\"Afghanistan\",\"cn\":\"阿富汗\",\"tr\":\"Afganistan\"}',
                    },
                    latitude: {
                      type: 'number',
                      description: 'the latitude of country',
                      example: 33.00000000,
                    },
                    longitude: {
                      type: 'number',
                      description: 'the longitude of country',
                      example: 65.00000000,
                    },
                    emoji: {
                      type: 'string',
                      description: 'the emoji flag of country',
                      example: '🇦🇫',
                    },
                    emojiU: {
                      type: 'string',
                      description: 'the emojiU of country',
                      example: 'U+1F1E6 U+1F1EB',
                    },
                    flag: {
                      type: 'number',
                      description: 'the flag of country',
                      example: 1,
                    },
                    wikiDataId: {
                      type: 'string',
                      description: 'the wiki Data Id of country',
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
        description: "Get list countries Fail !",
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
