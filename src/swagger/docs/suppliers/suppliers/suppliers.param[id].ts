const bodyPUT = {
  schema: {
    type: 'object',
    properties: {
      companyName: {
        type: 'string',
        description: 'Company Name',
        example: 'Vin group',
        require: false,
      },
      contactFirstName: {
        type: 'string',
        description: 'contact FirstName',
        example: 'Hot',
        require: false,
      },
      contactLastName: {
        type: 'string',
        description: 'contact LastName',
        example: 'Line',
        require: false,
      },
      contactTitle: {
        type: 'string',
        description: 'contact Title',
        example: 'Hotline Support ',
        require: false,
      },
      contactPhone: {
        type: 'string',
        description: 'Contact Phone',
        example: '0123456789',
        require: false,
      },
      contactFax: {
        type: 'string',
        description: 'Contact Fax',
        example: '0123456789',
        require: false,
      },
      contactEmail: {
        type: 'string',
        description: 'Contact Email',
        example: 'v-live.support@gmail.com',
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
    tags: ['API Suppliers'],
    summary: 'API Update Suppliers',
    operationId: 'UpdateSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters Suppliers ID',
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
    tags: ['API Suppliers'],
    summary: 'Get By Id Suppliers',
    operationId: 'GetByIdSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters Suppliers ID',
        example: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: responseSchema,
  },
  delete: {
    tags: ['API Suppliers'],
    summary: 'Xoa Suppliers',
    operationId: 'DeleteSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters Suppliers ID ',
        example: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: responseSchema,
  },
};
