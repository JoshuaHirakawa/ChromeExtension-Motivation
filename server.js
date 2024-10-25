// const express = require('express');
// const fetch = require('node-fetch');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.get('/quote', async (req, res) => {
//   try {
//     const response = await fetch('https://zenquotes.io/api/random');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).send('Error fetching quote');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Proxy server running on http://localhost:${PORT}`);
// });