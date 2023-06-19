const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const tableName = 'externalorders';

const ExternalOrderId = sequelize.define('orderId', {
  externalOrderId: {
    type: Sequelize.NUMBER,
  },
  hotelId: {
    type: Sequelize.STRING,
  }
  
}, { tableName });

// eslint-disable-next-line
ExternalOrderId.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = ExternalOrderId;
