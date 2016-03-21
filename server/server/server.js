var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./../api/api.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/api', api);

module.exports = app;
