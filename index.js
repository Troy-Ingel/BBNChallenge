var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'))
	.use(express.static('public'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }));

// start server
var server = app.listen(port, function() {
	console.log('Sever running at localhost:' + port);
});

// routes
require('./routes/api')(app);

