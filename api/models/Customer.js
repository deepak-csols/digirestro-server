const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const tableName = 'customer';

const Customer = sequelize.define('Customer', {
  
  orderid: {
    type: Sequelize.STRING,
    unique: true
  },
  customerjson: {
    type: Sequelize.STRING,
    
  },
}, { tableName });

// eslint-disable-next-line
Customer.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Customer;
