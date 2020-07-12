const express = require('express');
const ListRepository = require('../respositories/ListRepository');

const router = express.Router();

router.post('/', async (req , res) => {
    console.log(req.body);
    const List = await ListRepository.insert(req.body.name,req.body.userId)
    res.status(200).json(List);
});

router.get('/:id', async (req , res) => {
    const List = await ListRepository.getAllByUserId(req.params.id)
    res.status(200).json(List);
});

router.put('/', async (req , res) => {
    const List = await ListRepository.update(req.body.id, req.body.name)
    res.status(200).json(List);
});

router.delete('/:id', async (req , res) => {
    const ListId = await ListRepository.delete(req.params.id)
    res.status(200).json({id: ListId});
});

module.exports = router;