const bodyPOST = {
  schema: {
    type: 'object',
    properties: {
      userIds: {
        type: 'array',
        items: {
          type: 'string',
        },
        example: ['userId1...', 'userId2....'],
        require: true,
      },
      channelId: {
        type: 'string',
        description: 'channelId',
        example: '',
        require: true,
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
    tags: ['API Users Channels'],
    summary: 'Tao moi',
    operationId: 'CreateUsersChannelsAPI',
    parameters: [],
    requestBody: {
      content: {
        // 'multipart/form-data': bodyPOST,
        'application/json': bodyPOST,
      },
    },
    responses: responseSchema,
  },
  get: {
    tags: ['API Users Channels'],
    summary: 'Lay danh sach',
    operationId: 'GetListUsersChannelsAPI',
    parameters: [],
    responses: responseSchema,
  },
};
