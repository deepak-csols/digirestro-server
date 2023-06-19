const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const tableName = 'tableordermap';

const TableOrderMap = sequelize.define('TableOrderMap', {
  tableid: {
    type: Sequelize.STRING,
    unique: true,
  },
  orderid: {
    type: Sequelize.STRING,
  },
}, { tableName });

// eslint-disable-next-line
TableOrderMap.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = TableOrderMap;
