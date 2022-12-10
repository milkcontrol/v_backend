const bodyPUT = {
  schema: {
    type: 'object',
    properties: {
      supplierId: {
        type: 'number',
        description: 'Supplier Id',
        example: 1,
        require: false,
      },
      storeId: {
        type: 'number',
        description: 'Store Id',
        example: 1,
        require: false,
      },
      role: {
        type: 'number',
        description: 'role supplier in store',
        example: 1,
        require: false,
      },
      description: {
        type: 'string',
        description: 'Mo ta supplier store',
        example: 'Mo ta supplier store',
        require: false,
      },
    },
  },
};
const dataResponse = {
  properties: {
    id: '100',
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
    tags: ['API Stores Suppliers'],
    summary: 'API Update Stores-Suppliers',
    operationId: 'UpdateStoresSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters Stores-Suppliers ID',
        example: '',
        schema: {
          type: 'string',
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
    tags: ['API Stores Suppliers'],
    summary: 'Get By Id Stores-Suppliers',
    operationId: 'GetByIdStoresSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters Stores-Suppliers ID',
        example: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: responseSchema,
  },
  delete: {
    tags: ['API Stores Suppliers'],
    summary: 'Xoa Stores-Suppliers',
    operationId: 'DeleteStoresSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters Stores-Suppliers ID',
        example: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: responseSchema,
  },
};
