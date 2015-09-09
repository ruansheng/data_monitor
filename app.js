var express = require('express');
var hbs = require('hbs');
var routes = require('./routes/routes').routes;
var Index = require('./controller/index').Index;
var Data = require('./controller/data').Data;

var app = express();

app.use(express.static('./public'));
app.set('view engine','html');
app.engine('html',hbs.__express);

/**
 * index
 */
app.get(routes.index,Index.index);

/**
 * data index
 */
app.get(routes.data_index,Data.index);

app.listen(6677,function() {
	console.log('listen to 6677');
});
