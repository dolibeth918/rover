const User = require('./user')
const Vet = require('./vet')

User.belongsToMany(Vet, {through: 'user_vet'})
Vet.belongsToMany(User, {through: 'user_vet'})

module.exports = {
  User,
  Vet
}
