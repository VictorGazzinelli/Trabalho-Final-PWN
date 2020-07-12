const express = require('express');
const TaskRepository = require('../respositories/TaskRepository');

const router = express.Router();

router.post('/', async (req , res) => {
    const user = await TaskRepository.insert(req.body.name,req.body.listId,req.body.isDone)
    res.status(200).json(user);
});

router.get('/', async (req , res) => {
    const users = await TaskRepository.getAll()
    res.status(200).json(users);
});

router.get('/:id', async (req , res) => {
    const user = await TaskRepository.getAllByListId(req.params.id)
    res.status(200).json(user);
});

router.put('/', async (req , res) => {
    const user = await TaskRepository.update(req.body.id, req.body.name, req.body.isDone)
    res.status(200).json(user);
});

router.delete('/:id', async (req , res) => {
    const taskId = await TaskRepository.delete(req.params.id)
    res.status(200).json({id: taskId});
});

module.exports = router;