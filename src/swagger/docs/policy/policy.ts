export default {
    post: {
        tags: ['Policy'],
        summary: 'create policies to the system (by Admin)',
        operationId: 'createPolicy',
        parameters: [],
        requestBody: {
            content: {
                'multipart/form-data': {
                    schema: {
                        type: 'object',
                        require: ['number', 'content'],
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
                'application/json': {
                    schema: {
                        type: 'object',
                        require: ['number', 'content'],
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
            }
        },
        responses: {
            '200': {
                description: 'create policies success',
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
                description: "create policies Fail !",
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
    },
  get: {
    tags: ['Policy'],
    summary: 'get list policies (by Admin)',
    operationId: 'getListPolicy',
    parameters: [
      {
        name: 'policyId',
        in: 'query',
        description: "The id of policies",
        example: "",
        schema: {
          type: 'string',
        }
      },
      {
        name: 'policyType',
        in: 'query',
        description: "The type of policies",
        example: "",
        schema: {
          type: 'string',
        }
      },
      {
        name: 'status',
        in: 'query',
        description: "The status of policies",
        example: "",
        schema: {
          type: 'string',
        }
      },
      {
        name: 'orderBy',
        in: 'query',
        require: true,
        description: "order by field",
        example: 'id',
        schema: {
          type: 'string',
        }
      },
      {
        name: 'orderType',
        in: 'query',
        require: true,
        description: "order by type ASC or DESC",
        example: 'ASC',
        schema: {
          enum: ['ASC','DESC'],
        }
      },
      {
        name: 'pageNumber',
        in: 'query',
        require: true,
        description: "page number pagination",
        example: 0,
        schema: {
          type: 'string',
        }
      },
      {
        name: 'itemsPerPage',
        in: 'query',
        require: true,
        description: "tems per Page pagination",
        example: 5,
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
