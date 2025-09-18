const express = require('express');
const { sendMessageToTelegram } = require('../utils/telegramBot');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { chatId, message } = req.body;
    await sendMessageToTelegram(chatId, message);
    res.json({ status: 'Message sent to Telegram' });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;