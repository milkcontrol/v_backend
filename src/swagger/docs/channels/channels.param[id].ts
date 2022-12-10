const bodyPUT = {
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Channel name',
        example: 'Channel name...',
        require: false,
      },
      otherName: {
        type: 'string',
        description: 'otherName',
        example: '',
        require: false,
      },
      lastMessageId: {
        type: 'string',
        description: 'Last Message Id',
        default: '',
        require: false,
      },
      description: {
        type: 'string',
        description: 'description',
        default: 'description...',
        require: false,
      },
      isDelete: {
        type: 'boolean',
        description: 'description',
        default: false,
        require: false,
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
    tags: ['API Channels'],
    summary: 'Edit',
    operationId: 'UpdateChannelsAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters Channels ID',
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
    tags: ['API Channels'],
    summary: 'Get By Id',
    operationId: 'GetByIdChannelsAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters Channels ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    responses: responseSchema,
  },
  delete: {
    tags: ['API Channels'],
    summary: 'Xoa',
    operationId: 'DeleteChannelsAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters Channels ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    responses: responseSchema,
  },
};
