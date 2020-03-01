var exprees = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routers = require('./routes')

class AppAlgorithmia{
    constructor(){
        this.express = exprees();
        this.middleware();
        this.routers();
    }

    middleware(){
        this.express.use(cors());
        this.express.use(bodyParser.json());
    }

    routers(){
        this.express.use(routers);       
    }
}

module.exports = new AppAlgorithmia().express;