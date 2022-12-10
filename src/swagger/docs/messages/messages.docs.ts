const bodyPOST = {
  schema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: 'Gui tin nhan',
        example: 'some text',
      },
      channelId: {
        type: 'number',
        description: 'Nhom ma tin nhan duoc gui den',
        example: 1,
      },
      type: {
        type: 'string',
        description: 'Loai tin nhan gui di: File / Text / Hinh anh',
        enum: ['file', 'text', 'image'],
        default: 'text',
        example: 'text',
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
    tags: ['API Messages'],
    summary: 'Tao moi tin nhan message',
    operationId: 'CreateMessagesAPI',
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
    tags: ['API Messages'],
    summary: 'Lay danh sach message',
    operationId: 'GetListMessagesAPI',
    parameters: [],
    responses: responseSchema,
  },
};
