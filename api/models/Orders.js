const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const tableName = 'orders';

const Orders = sequelize.define('Orders', {
  orderid: {
    type: Sequelize.STRING,
    unique: true,
  },
  orderjson: {
    type: Sequelize.TEXT,
  },
}, { tableName });

// eslint-disable-next-line
Orders.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Orders;
