import { Options } from 'sequelize';

const config: Options = {
  username: 'postgres',
  password: 'postgres',
  database: 'bancong',
  host: '127.0.0.1',
  dialect: 'postgres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
