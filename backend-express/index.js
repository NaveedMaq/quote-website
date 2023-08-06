const express = require('express');

const app = express();

app.get('/api/quote', async (req, res, next) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const [data] = await response.json();

    const quote = { text: data.q, author: data.a };

    res.status(200).json({
      status: 'success',
      data: { quote },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Could not fetch the quote',
    });
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
