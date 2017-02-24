var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(require('express-promise')());

// YOUR CODE BELOW
app.get('/api/users', (req, res) => {
  let answers = Users.getAll();
  res.status(200).send(answers);
});

app.get('/api/users/:id', (req, res) => { // async
  let id = req.originalUrl.split('/')
  id = id[id.length - 1];
  let result;
  console.log(id, 'req.originalUrl');
  Users.getOne(id, function (err, result) {
    if (err) throw (err);
    res.status(200).send(result);
  })
});

app.post('/api/users', function(req, res) {
  console.log(req);
  let newUser = {
    name: req.body.name,
    email: req.body.email
  };
  Users.addOne(newUser, function(err, data){
    if (err) throw err;
    return data;
  });
  res.status(201).send('created');
});

app.put('/api/users/:id', (req, res) => {
  let id = req.originalUrl.split('/');
  id = id[id.length - 1];
  // let id = req.body.id;
  let newProperties = {
    name: req.body.name,
    email: req.body.email
  };
  console.log(req.body.name, 'put')
  Users.updateOne(id, newProperties, (err, data) => {
    if (err) throw err;
    console.log(data, 'put data')
    res.status(200).send(data);
  });
});

app.delete('/api/users/:id', (req, res) => { //asynchronous
  let id = req.originalUrl.split('/');
  id = id[id.length - 1];
  Users.deleteOne(id, (err, data) => {
    if(err) throw err;
    res.status(200).send(data);
  });
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;


// http://localhost:8888/api/users?name="John"&email="john@gmail.com"
