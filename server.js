const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const messages = require('./src/backend/database/messages');

const app = express();

const whitelist = ['http://localhost:8080'];
const corsOption = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('not allowed origin!'));
    }
  },
};
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(messages);
});

app.post('/add', (req, res) => {
  messages.push(req.body);

  res.send(messages);
});

app.get('/:id', (req, res) => {
  const { id } = req.params;

  res.send(messages[+id]);
});

app.listen(7001, () => console.log('Example app listening on port 7001!'));
