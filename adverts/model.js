const Sequelize = require('sequelize')
const sequelize = require('../db')


const Advert = sequelize.define('adverts', {
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description',
    allowNull: true
  },
  picture: {
    type: Sequelize.STRING,
    field: 'picture',
    allowNull: false
  },
  price: {
      type:Sequelize.INTEGER,
      field: 'price',
      allowNull: false
  },
  email: {
      type:Sequelize.STRING,
      field: 'email',
      allowNull: false
  },
  phoneNumber: {
      type: Sequelize.INTEGER,
      field: 'phone number',
      allowNull: false
  }
})

module.exports = Advert