const express = require('express');
const dotenv = require('dotenv');
const telegramRouter = require('./api/telegram');
const geminiRouter = require('./api/gemini');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/telegram', telegramRouter);
app.use('/api/gemini', geminiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});