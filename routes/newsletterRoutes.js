const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const subscription = new Newsletter({ email });
    await subscription.save();
    res.json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;