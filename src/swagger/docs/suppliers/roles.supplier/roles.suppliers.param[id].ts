const bodyPUT = {
  schema: {
    type: 'object',
    properties: {
      role: {
        type: 'number',
        description: 'Quyen supplier trong store',
        example: 4,
        require: false,
      },
      name: {
        type: 'string',
        description: 'Ten quyen supplier trong store',
        example: 'Truong Kho Test',
        require: false,
      },
      description: {
        type: 'string',
        description: 'Mo ta quyen supplier trong store',
        example: 'Mo ta quyen supplier trong store',
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
    tags: ['API Roles Suppliers'],
    summary: 'API Update quyen cua nha cung cap trong Roles',
    operationId: 'UpdateRolesSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters RolesSuppliers ID',
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
    tags: ['API Roles Suppliers'],
    summary: 'Get By Id quyen cua nha cung cap trong Roles',
    operationId: 'GetByIdRolesSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters RolesSuppliers ID',
        example: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: responseSchema,
  },
  delete: {
    tags: ['API Roles Suppliers'],
    summary: 'Xoa quyen cua nha cung cap trong Roles',
    operationId: 'DeleteRolesSuppliersAPI',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'parameters RolesSuppliers ID',
        example: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: responseSchema,
  },
};
