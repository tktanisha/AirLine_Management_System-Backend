'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  city.init({
    name: DataTypes.STRING,
    
    //we can also set our own constrains
    allowNull:false
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};