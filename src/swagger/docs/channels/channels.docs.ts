const bodyPOST = {
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Channel name',
        example: 'Channel name...',
      },
      otherName: {
        type: 'string',
        description: 'otherName',
        example: '',
      },
      lastMessageId: {
        type: 'string',
        description: 'Last Message Id',
        default: '',
      },
      description: {
        type: 'string',
        description: 'description',
        default: 'description...',
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
    ...bodyPOST.schema.properties,
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
  post: {
    tags: ['API Channels'],
    summary: 'Tao moi',
    operationId: 'CreateChannelsAPI',
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': bodyPOST,
        'application/json': bodyPOST,
      },
    },
    responses: responseSchema,
  },
  get: {
    tags: ['API Channels'],
    summary: 'Lay danh sach',
    operationId: 'GetListChannelsAPI',
    parameters: [],
    responses: responseSchema,
  },
};
