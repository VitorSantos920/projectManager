const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const allItems = require('./src/allItems');
const insertProject = require('./src/insertProject');

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  return res.sendFile(__dirname + '/public/index.html');
});

app.get('/projects', async (req, res) => {
  const [query] = await allItems();

  res.json(query);
});

app.post('/insert', (req, res) => {
  const { name, description, responsible } = req.body;

  insertProject(name, description, responsible);

  res.setHeader('Location', '/');
  res.status(302).end();
});

app.listen(PORT, 'localhost', () => {
  console.log(`Application running in ${PORT} port`);
});
