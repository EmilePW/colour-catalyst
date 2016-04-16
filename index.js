var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var sass = require('node-sass');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));

// Serves up index page for SPA
app.get('*', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Woop! Woop! Join the party on localhost: ' + port);

exports = module.exports = app;