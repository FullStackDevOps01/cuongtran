'use strict';

var express = require('express');
var app = express();
var logger = require('./helpers/logger');
var config = require('config')

var server = app.listen(config.get('server.port'), config.get('server.host'), function() {
    var host = server.address().address;
    var port = server.address().port;
    //console.log('Server start at http://%s:%s', host, port);
    logger.info('Server start at http://%s:%s', host, port);
});

// say hello!
app.get('/hello', function(req, res) {
    //logger.debug('someone called %s api', req.);
    res.send(JSON.stringify({'hello': 'world!'}));
});

