const bodyPUT = {
  schema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: 'Gui tin nhan',
        example: 'some text',
        require: false,
      },
      channelId: {
        type: 'number',
        description: 'Nhom ma tin nhan duoc gui den',
        example: 1,
        require: false,
      },
      type: {
        type: 'string',
        description: 'Loai tin nhan gui di: File / Text / Hinh anh',
        enum: ['file', 'text', 'image'],
        example: 'text',
        default: 'text',
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
    tags: ['API Messages'],
    summary: 'Edit tin nhan',
    operationId: 'UpdateMessagesAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters Messages ID',
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
    tags: ['API Messages'],
    summary: 'Get Message By Id',
    operationId: 'GetByIdMessagesAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters Messages ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    responses: responseSchema,
  },
  delete: {
    tags: ['API Messages'],
    summary: 'Xoa tin nhan',
    operationId: 'DeleteMessagesAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Parameters Messages ID',
        example: '',
        schema: {
          type: 'number',
        },
      },
    ],
    responses: responseSchema,
  },
};
