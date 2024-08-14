const express = require('express');
const cors = require('cors');
const app = express();
const tasks = require('./routes/tasks');

var config = require('./config/config.js');

app.use(cors());

app.use(express.json());
app.use('/tasks', tasks);

const BACKEND_INTERNAL_PORT = process.env.BACKEND_INTERNAL_PORT;
app.listen(BACKEND_INTERNAL_PORT, () => {
  console.log(`Server is running on port ${BACKEND_INTERNAL_PORT}`);
});

