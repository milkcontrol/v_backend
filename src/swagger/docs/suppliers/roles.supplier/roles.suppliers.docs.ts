const bodyPOST = {
  schema: {
    type: 'object',
    properties: {
      role: {
        type: 'number',
        description: 'Quyen supplier trong store',
        example: 4,
      },
      name: {
        type: 'string',
        description: 'Ten quyen supplier trong store',
        example: 'Truong Kho Test',
      },
      description: {
        type: 'string',
        description: 'Mo ta quyen supplier trong store',
        example: 'Mo ta quyen supplier trong store',
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
    tags: ['API Roles Suppliers'],
    summary: 'API Tao moi quyen cua nha cung cap trong stores',
    operationId: 'CreateStoresSuppliersAPI',
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
    tags: ['API Roles Suppliers'],
    summary: 'Lay danh sach quyen cua nha cung cap trong stores',
    operationId: 'GetListStoresSuppliersAPI',
    parameters: [],
    responses: responseSchema,
  },
};
