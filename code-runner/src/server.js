const express = require('express');
const cors = require('cors');
require("./worker.js");

const app = express();

const PORT = 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'code-runner is running correctly' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
