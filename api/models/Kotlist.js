const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'kotlist';

const Kot = sequelize.define('Kots', {
  orderid: {
    type: Sequelize.STRING,
  },
  kotjson: {
    type: Sequelize.TEXT,
  },
}, {  tableName });

// eslint-disable-next-line
Kot.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  //delete values.password;

  return values;
};

module.exports = Kot;
