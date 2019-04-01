'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { bcrypt } = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        },
        isUnique(value) {
          return User.findOne({
            where: {
              "email": value,
              "id": {
                [Op.ne]: this.id
              }
            }
          })
            .then(feedback => {
              if (feedback) {
                throw new Error('Email has been registered')
              }
            })
            .catch(err => {
              throw err
            })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: (user, options) => {
        user.email = user.email.toLowerCase()
        user.password = bcrypt.hashPassword(user.password)
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};