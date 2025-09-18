const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

const sendMessageToTelegram = async (chatId, message) => {
  await bot.sendMessage(chatId, message);
};

// Set webhook saat server start
const setWebhook = async () => {
  const webhookUrl = process.env.WEBHOOK_URL;
  await bot.setWebHook(webhookUrl);
  console.log(`Webhook set to ${webhookUrl}`);
};

setWebhook();

module.exports = { sendMessageToTelegram };