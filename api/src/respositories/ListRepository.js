const List = require('../models/List');

module.exports = {
  async getAll() {
    return await List.findAll({order: [ ['id', 'ASC'] ] });
  },

  async getById(ListId) {
    return await List.findOne({ where: { id: ListId } });
  },

  async getAllByUserId(UserId) {
    return await List.findAll({ where: { userId: UserId }, order: [ ['id', 'ASC'] ] });
  },

  async insert(name, userId) {
    return List.create({ name, userId });
  },

  async delete(ListId) {
    const list = await List.findOne({ where: { id: ListId } });
    await list.destroy();
    return +ListId;
  },

  async update(ListId, name) {
    const oldList = await List.findOne({ where: { id: ListId } });;
    oldList.name = name;
    await oldList.save();
    return oldList;
  },
};