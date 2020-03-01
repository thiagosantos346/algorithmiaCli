var routers = require('express').Router();
var AlgorithmiaControler = require('./AlgorithmiaController');

routers.post('/run', AlgorithmiaControler.run);

module.exports = routers;