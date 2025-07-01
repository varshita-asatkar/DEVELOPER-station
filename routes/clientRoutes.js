const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Create new client
router.post('/', async (req, res) => {
  try {
    const { name, logoUrl } = req.body;
    const client = new Client({ name, logoUrl });
    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;