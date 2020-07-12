const express = require('express');
const UserRepository = require('../respositories/UserRepository');

const router = express.Router();

router.post('/', async (req , res) => {
    const user = await UserRepository.insert(req.body.name,req.body.email)
    res.status(200).json(user);
});

router.get('/', async (req , res) => {
    const users = await UserRepository.getAll()
    res.status(200).json(users);
});

router.get('/:id', async (req , res) => {
    const user = await UserRepository.getById(req.params.id)
    res.status(200).json(user);
});

router.put('/', async (req , res) => {
    const user = await UserRepository.update(req.body)
    res.status(200).json(user);
});

router.delete('/:id', async (req , res) => {
    const userId = await UserRepository.delete(req.params.id)
    res.status(200).json({id: userId});
});

module.exports = router;