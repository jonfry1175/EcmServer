'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
        notNull: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        len: [8, 100]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });


  //validate unique email
  User.beforeCreate(async (user, options) => {
    const emailFound = await User.findOne({ where: { email: user.email } })
    if (emailFound) {
      throw new Error('Email already exists')
    }
  })

  return User;
};