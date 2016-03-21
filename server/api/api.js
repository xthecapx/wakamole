var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var DATA_DIR = path.join(__dirname, '..', 'data');
var FILE = "";

router.get('/:file', function(req, res) {
  FILE = DATA_DIR + "/" + req.params.file + ".json";
  res.sendFile(FILE);
});

router.post('*', function(req, res) {
  var configFile = fs.readFileSync(FILE);
  var config = JSON.parse(configFile);
  config.push(req.body);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync(FILE, configJSON);
});

module.exports = router;
