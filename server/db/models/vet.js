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
  }
})

module.exports = Vet
