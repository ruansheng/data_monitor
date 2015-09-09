var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');

var routes = require('./routes/routes').routes;
var Manager = require('./controller/manager').Manager;
var Index = require('./controller/index').Index;
var Data = require('./controller/data').Data;

var app = express();

app.use(express.static('./public'));
app.set('view engine','html');
app.engine('html',hbs.__express);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * login
 */
app.get(routes.login,Manager.login);

/**
 * doLogin
 */
app.post(routes.doLogin,Manager.doLogin);

/**
 * index
 */
app.get(routes.index,Index.index);

/**
 * data index
 */
app.get(routes.data_index,Data.index);

/**
 * data index
 */
app.get(routes.cpu,Index.cpu);

/**
 * data index
 */
app.get(routes.data_cpu,Data.cpu);

app.listen(6677,function() {
	console.log('listen to 6677');
});
