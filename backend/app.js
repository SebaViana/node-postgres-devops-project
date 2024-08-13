const express = require('express');
const cors = require('cors');
const app = express();
const tasks = require('./routes/tasks');

var config = require('./config/config.js');

app.use(cors());

app.use(express.json());
app.use('/tasks', tasks);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

