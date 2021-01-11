const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/ezorders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
});
