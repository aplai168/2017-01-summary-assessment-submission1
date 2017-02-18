var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.get('/api/users', (req, res) => {
  let answers = Users.getAll();
  res.send(answers);
  res.sendStatus(200);
});

app.get('/api/users/:id', (req, res) => {
  let id = req.body.id;
  // console.log(req.body, 'req.body')
  let result = Users.getOne(id);
  res.sendStatus(200);
  res.send(result);
});

app.post('/api/users', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email
  };
  console.log(newUser);
  Users.addOne(newUser);
  res.sendStatus(201);
  res.json(req.body);
  res.end('Done');
});

app.put('/api/users/:id', (req, res) => {
  let id = req.body.id;
  let newProperties = {
    name: req.body.name,
    email: req.body.email
  };
  User.updateOne(id, newProperties);
  res.sendStatus(200);
  res.end('Updated User');
});

app.delete('/api/users/:id', (req, res) => {
  let id = req.body.id;
  User.deleteOne(id);
  res.sendStatus(200);
  res.end('Deleted user');
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;


// http://localhost:8888/api/users?name="John"&email="john@gmail.com"
