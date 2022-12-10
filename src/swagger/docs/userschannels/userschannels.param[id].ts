const bodyPUT = {
  schema: {
    type: 'object',
    properties: {
      blocked: {
        type: 'boolean',
        description: 'Block in this channel',
        default: false,
      },
      isDelete: {
        type: 'boolean',
        description: 'description',
        default: false,
      },
    },
  },
};
const dataResponse = {
  properties: {
    id: '100',
    userId: '1000',
    ...bodyPUT.schema.properties,
  },
};
const responseSchema = {
  '200': {
    description: 'Success',
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
            data: dataResponse,
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
    description: 'Request Fail !',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Error400',
        },
      },
    },
  },
  '401': {
    description: 'Request Fail !',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Error401',
        },
      },
    },
  },
  '422': {
    description: 'Request Fail !',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Error422',
        },
      },
    },
  },
  '500': {
    description: 'Server error',
  },
};

export default {
  patch: {
    tags: ['API Users Channels'],
    summary: 'Edit',
    operationId: 'UpdateUsersChannelsAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters UsersChannels ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    requestBody: {
      content: {
        'multipart/form-data': bodyPUT,
        'application/json': bodyPUT,
      },
    },
    responses: responseSchema,
  },
  get: {
    tags: ['API Users Channels'],
    summary: 'Get By Id',
    operationId: 'GetByIdUsersChannelsAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters UsersChannels ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    responses: responseSchema,
  },
  delete: {
    tags: ['API Users Channels'],
    summary: 'Xoa',
    operationId: 'DeleteUsersChannelsAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters UsersChannels ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    responses: responseSchema,
  },
};
