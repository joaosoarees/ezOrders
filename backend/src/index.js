const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/ezorders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use(express.json());
app.use(routes);

server.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
});
