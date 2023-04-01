const express = require('express');
const bodyParser = require('body-parser');
const ActorService = require('./service/ActorService.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/actors', (req, res) => {
  const actors = new ActorService();
  res.send(actors.getActors());
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});