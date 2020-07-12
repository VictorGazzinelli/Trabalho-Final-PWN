const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const List = require('../models/List');
const Task = require('../models/Task');

const connection = new Sequelize(dbConfig);

User.init(connection);
List.init(connection);
Task.init(connection);

//User.associate(connection.models);

module.exports = connection;