const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const callGeminiAPI = async (message) => {
  try {
    const response = await axios.post(
      'https://api.gemini.com/v1/whatever-endpoint', // Ganti dengan endpoint Gemini yang sesuai
      { prompt: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.result || 'No response from Gemini';
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'Sorry, I could not process your request.';
  }
};

module.exports = { callGeminiAPI };