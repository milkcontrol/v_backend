require('dotenv').config();

const development = {
  database: process.env.DB_NAME || 'v_live',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  dialect: 'mysql',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  storage: ':memory:',
  models: [__dirname + '/../**/*.model.ts'],
  pool: {
    max: 1,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
    freezeTableName: false,
    underscored: false,
    syncOnAssociation: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
};

const test = development;
const production = development;
const stg = development;

module.exports = {
  development,
  test,
  stg,
  production,
};
