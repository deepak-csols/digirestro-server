const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'cancelorders';

const CancelOrders = sequelize.define('CancelOrders', {
  orderid: {
    type: Sequelize.STRING,
  },
  orderjson: {
    type: Sequelize.TEXT,
  },
}, {  tableName });

// eslint-disable-next-line
CancelOrders.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  //delete values.password;

  return values;
};

module.exports = CancelOrders;
