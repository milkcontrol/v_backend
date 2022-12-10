import dotenv from 'dotenv';
import docs from './docs';
import components from './docs/components';
dotenv.config();

const definition = () => {
  const url = process.env.API_URL || 'http://localhost:4000';

  return {
    openapi: '3.0.0',
    info: {
      title: 'BackEnd v-live',
      version: '0.1.0',
      description: 'App live stream đại nhạc hội',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {},
    },
    servers: [{url: url, description: 'REST API Ver 1.0.0'}],
    security: [{bearerAuth: []}],
    components,
    ...docs,
  };
};

export default {
  definition: definition(),
  apis: [],
};
