const Sequelize = require('sequelize')
const db = require('../db')

const Vet = db.define('vet', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: '718-123-4567'
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.vets-now.com/app/uploads/2016/11/vets-now-professionals.jpg'
  }
})

module.exports = Vet
