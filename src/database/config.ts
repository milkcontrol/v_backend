import {Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'v_live',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  // storage: ':memory:',
  models: [__dirname + '/../**/*.model.ts'],
  pool: {
    max: parseInt(process.env.DB_MAX_THREADS || '5'),
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  quoteIdentifiers: false,
});

export default sequelize;
