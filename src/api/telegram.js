const express = require('express');
const { sendMessageToTelegram } = require('../utils/telegramBot');
const { callGeminiAPI } = require('../utils/geminiClient');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || !message.text || !message.chat) {
      return res.sendStatus(200);
    }

    const chatId = message.chat.id;
    const userMessage = message.text;

    // Kirim pesan ke Gemini
    const geminiResponse = await callGeminiAPI(userMessage);

    // Kirim balasan ke Telegram
    await sendMessageToTelegram(chatId, geminiResponse);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error handling Telegram webhook:', error);
    res.sendStatus(500);
  }
});

module.exports = router;