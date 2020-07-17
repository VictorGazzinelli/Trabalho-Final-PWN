import { Sequelize } from 'sequelize';
const dbConfig = require('../config/database');

import User from '../models/User'
import List from '../models/List'
import Task from '../models/Task'


const connection = new Sequelize(dbConfig);

User.init(connection);
List.init(connection);
Task.init(connection);

module.exports = connection;