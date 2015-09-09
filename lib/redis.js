var redis = require('redis');
exports.Redis = {
    "connect" : function(host, port){
        var client = redis.createClient(port, host, {connect_timeout:1});
        //client.auth('password','callback');
        return client;
    }
}