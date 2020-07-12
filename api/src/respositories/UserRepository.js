const User = require('../models/User');

module.exports = {
  async getAll() {
    return await User.findAll({order: [ ['id', 'ASC'] ] });
  },

  async getById(userId) {
    return await User.findOne({ where: { id: userId } });
  },

  async insert(name, email) {
    return User.create({ name, email });
  },

  async delete(userId) {
    const user = await User.findOne({ where: { id: userId } });
    await user.destroy();
    return +userId;
  },

  async update(user) {
    const oldUser = await User.findOne({ where: { id: user.id } });;
    oldUser.name = user.name;
    oldUser.email = user.email;
    await oldUser.save();
    return oldUser;
  },
};