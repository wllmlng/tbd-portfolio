const express = require('express');
const db = require('../config/firebase');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, completed } = req.body;
    const newTodo = await db.collection('todos').add({
      title,
      completed: completed || false,
      createdAt: new Date()
    });
    res.status(200).send({ id: newTodo.id, message: 'Todo added successfully!' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
