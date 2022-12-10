const bodyPOST = {
  schema: {
    type: 'object',
    properties: {
      supplierId: {
        type: 'number',
        description: 'Supplier Id',
        example: 1,
      },
      storeId: {
        type: 'number',
        description: 'Store Id',
        example: 1,
      },
      role: {
        type: 'number',
        description: 'role supplier in store',
        example: 1,
      },
      description: {
        type: 'string',
        description: 'Mo ta supplier store',
        example: 'Mo ta supplier store',
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
    tags: ['API Stores Suppliers'],
    summary: 'API Tao moi Stores Suppliers',
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
    tags: ['API Stores Suppliers'],
    summary: 'API Lay Danh sach Stores Suppliers',
    operationId: 'GetListStoresSuppliersAPI',
    parameters: [],
    responses: responseSchema,
  },
};
