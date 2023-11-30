const express = require('express');
const mongoose = require('./utils/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth.routes'));
app.use('/work', require('./routes/work.routes'));
app.use('/group', require('./routes/group.routes'));
app.use('/worker', require('./routes/worker.routes'));
app.use('/statistics', require('./routes/statistics.routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
