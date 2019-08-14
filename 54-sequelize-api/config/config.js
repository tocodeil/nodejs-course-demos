const path = require('path');

module.exports = {
  development: {
    storage: path.resolve(__dirname, '..', 'data', 'development.db'),
    dialect: 'sqlite',
  },
  test: {
    storage: path.resolve(__dirname, '..', 'data', 'test.db'),
    dialect: 'sqlite',
  },
  production: {
    storage: path.resolve(__dirname, '..', 'data', 'production.db'),
    dialect: 'sqlite',
    logging: false,
  },
};
