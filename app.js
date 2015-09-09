var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.send('data_monitor');
	res.end();
});

app.listen(6677,function() {
	console.log('listen to 6677');
});
