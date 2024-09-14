// backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/news', async (req, res) => {
  const { q, category, country, language, page } = req.query;
  const apiKey = 'YOUR_GNEWS_API_KEY';

  const params = {
    q,
    category,
    country,
    language,
    page: page || 1,
    apiKey,
  };

  try {
    const { data } = await axios.get(`https://gnews.io/api/v4/search`, { params });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch news' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
