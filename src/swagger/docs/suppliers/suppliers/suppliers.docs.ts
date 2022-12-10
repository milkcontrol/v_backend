const bodyPOST = {
  schema: {
    type: 'object',
    properties: {
      companyName: {
        type: 'string',
        description: 'Company Name',
        example: 'Company Name Demo',
      },
      contactFirstName: {
        type: 'string',
        description: 'contact FirstName',
        example: 'Hot',
      },
      contactLastName: {
        type: 'string',
        description: 'contact LastName',
        example: 'Line',
      },
      contactTitle: {
        type: 'string',
        description: 'contact Title',
        example: 'Hotline Support ',
      },
      contactPhone: {
        type: 'string',
        description: 'Contact Phone',
        example: '0123456789',
      },
      contactFax: {
        type: 'string',
        description: 'Contact Fax',
        example: '0123456789',
      },
      contactEmail: {
        type: 'string',
        description: 'Contact Email',
        example: 'v-live.support@gmail.com',
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
    tags: ['API Suppliers'],
    summary: 'API Nha cung cap',
    operationId: 'CreateSuppliersAPI',
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
    tags: ['API Suppliers'],
    summary: 'API Nha cung cap',
    operationId: 'GetListSuppliersAPI',
    parameters: [],
    responses: responseSchema,
  },
};
