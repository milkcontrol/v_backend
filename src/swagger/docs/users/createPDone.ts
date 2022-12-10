export default {
  post: {
    tags: ['Users'],
    summary: 'user create PDone to the system (by PDone)',
    operationId: 'createPDone',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            required: [
              "firstName",
              "lastName",
              "displayName",
              "password",
              "phoneNumber",
              "email",
              "birthday",
              "identityNumber",
              "dateRelease",
              "placeRelease",
              "countryId",
              "cityId",
              "stateId",
              "specificAddress",
              "currentCountryId",
              "currentCityId",
              "currentStateId",
              "currentSpecificAddress",
              "policyId",
              "genderTypeId"
            ],
            properties: {
              password: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string',
                example: 'newPassword@1',
              },
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
                example: '2000-10-08 00:00:00',
              },
              identityNumber: {
                type: 'string',
                description: 'The identity number id card of user',
                example: '1234567890-0987654321',
              },
              dateRelease: {
                type: 'string',
                description: 'The day release id card of user',
                example: '2090-10-08 00:00:00',
              },
              placeRelease: {
                type: 'string',
                description: 'The place release id card of user',
                example: 'HN',
              },
              countryId: {
                type: 'number',
                description: 'The country id to query',
                example: 1,
              },
              cityId: {
                type: 'number',
                description: 'The city Id to query',
                example: 1,
              },
              stateId: {
                type: 'number',
                description: 'The state Id to query',
                example: 2,
              },
              specificAddress: {
                type: 'string',
                description: 'The specific address of user',
                example: '123 Nguyen Street',
              },
              currentCountryId: {
                type: 'number',
                description: 'The country id to query',
                example: 1,
              },
              currentCityId: {
                type: 'number',
                description: 'The city Id to query',
                example: 1,
              },
              currentStateId: {
                type: 'number',
                description: 'The state Id to query',
                example: 2,
              },
              currentSpecificAddress: {
                type: 'string',
                description: 'The specific address of user',
                example: '123 Nguyen Street',
              },
              height: {
                type: 'number',
                description: 'The height of user',
                example: 123,
              },
              width: {
                type: 'number',
                description: 'The width of user',
                example: 123,
              },
              bloodTypeId: {
                type: 'number',
                description: 'The id of blood type table',
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
              genderTypeId: {
                type: 'number',
                description: 'The gender type id ',
                example: 1,
              },
              policyId: {
                type: 'number',
                description: 'The policies id eg: 2',
                example: 2,
              },
            },
          },
        },
        'application/json': {
          schema: {
            type: 'object',
            required: [
              "firstName",
              "lastName",
              "displayName",
              "password",
              "phoneNumber",
              "email",
              "birthday",
              "identityNumber",
              "dateRelease",
              "placeRelease",
              "countryId",
              "cityId",
              "stateId",
              "specificAddress",
              "currentCountryId",
              "currentCityId",
              "currentStateId",
              "currentSpecificAddress",
              "policyId",
              "genderTypeId"
            ],
            properties: {
              password: {
                type: 'string',
                description: 'The new password of user and must contain 1 uppercase, 1 lowercase, 1 numbers, 1 symbols, min length 8 letter in string',
                example: 'newPassword@1',
              },
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
                example: '2000-10-08 00:00:00',
              },
              identityNumber: {
                type: 'string',
                description: 'The identity number id card of user',
                example: '1234567890-0987654321',
              },
              dateRelease: {
                type: 'string',
                description: 'The day release id card of user',
                example: '2090-10-08 00:00:00',
              },
              placeRelease: {
                type: 'string',
                description: 'The place release id card of user',
                example: 'HN',
              },
              countryId: {
                type: 'number',
                description: 'The country id to query',
                example: 1,
              },
              cityId: {
                type: 'number',
                description: 'The city Id to query',
                example: 1,
              },
              stateId: {
                type: 'number',
                description: 'The state Id to query',
                example: 2,
              },
              specificAddress: {
                type: 'string',
                description: 'The specific address of user',
                example: '123 Nguyen Street',
              },
              currentCountryId: {
                type: 'number',
                description: 'The country id to query',
                example: 1,
              },
              currentCityId: {
                type: 'number',
                description: 'The city Id to query',
                example: 1,
              },
              currentStateId: {
                type: 'number',
                description: 'The state Id to query',
                example: 2,
              },
              currentSpecificAddress: {
                type: 'string',
                description: 'The specific address of user',
                example: '123 Nguyen Street',
              },
              height: {
                type: 'number',
                description: 'The height of user',
                example: 123,
              },
              width: {
                type: 'number',
                description: 'The width of user',
                example: 123,
              },
              bloodTypeId: {
                type: 'number',
                description: 'The id of blood type table',
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
              genderTypeId: {
                type: 'number',
                description: 'The gender type id ',
                example: 1,
              },
              policyId: {
                type: 'number',
                description: 'The policies id eg: 2',
                example: 2,
              },
            },
          },
        },
      }
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
                    message:{
                      example: "Account was created. Please perform the registration information verification step."
                    },
                    nextToken: {
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
        description: "user create Fail !",
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
