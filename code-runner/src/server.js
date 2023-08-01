const express = require('express');
require("./worker.js");

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'code-runner is running correctly' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});