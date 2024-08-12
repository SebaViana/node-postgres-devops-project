const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasks);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

