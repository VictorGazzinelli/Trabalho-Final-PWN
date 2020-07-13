const express = require('express');
const UserRepository = require('../respositories/UserRepository');
const { ensureAuthentication } = require('../config/ensureAuthentication');

const router = express.Router();

router.post('/', ensureAuthentication, async (req, res) => {
  const user = await UserRepository.insert(req.body.name, req.body.email)
  res.status(200).json(user);
});

router.get('/', ensureAuthentication, async (req, res) => {
  try {
    const users = await UserRepository.getAll()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', ensureAuthentication, async (req, res) => {
  const user = await UserRepository.getById(req.params.id)
  res.status(200).json(user);
});

router.put('/', ensureAuthentication, async (req, res) => {
  const user = await UserRepository.update(req.body)
  res.status(200).json(user);
});

router.delete('/:id', ensureAuthentication, async (req, res) => {
  const userId = await UserRepository.delete(req.params.id)
  res.status(200).json({ id: userId });
});

module.exports = router;