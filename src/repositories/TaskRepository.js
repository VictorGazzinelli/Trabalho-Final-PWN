const Task = require('../models/Task');

module.exports = {
  async getAll() {
    return await Task.findAll({order: [ ['id', 'ASC'] ] });
  },

  async getById(TaskId) {
    return await Task.findOne({ where: { id: TaskId } });
  },

  async getAllByListId(ListId) {
    return await Task.findAll({ where: { listId: ListId }, order: [ ['id', 'ASC'] ]  });
  },

  async insert(name, listId, isDone) {
    return Task.create({ name, listId, isDone });
  },

  async delete(TaskId) {
    const list = await Task.findOne({ where: { id: TaskId } });
    await list.destroy();
    return +TaskId;
  },

  async update(TaskId, name, isDone) {
    const oldTask = await Task.findOne({ where: { id: TaskId } });;
    oldTask.name = name;
    oldTask.isDone = isDone;
    await oldTask.save();
    return oldTask;
  },
};