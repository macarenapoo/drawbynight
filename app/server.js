var express = require('express');
var app = express();
var axios = require('axios');
var Instagram = require('instagram-node-lib');

var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const CLIENT_ID	= '76d19746c0c34c998092b779fb95a8f4';
const CLIENT_SECRET	= '3d9312af709d4f0796e52c3469792db0';

Instagram.set('client_id', CLIENT_ID);
Instagram.set('client_secret', CLIENT_SECRET);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  Instagram.tags.info({
    name: 'blue',
    complete: function(data) {
      console.log(data);
    }
  })
});

app.listen(3000)
