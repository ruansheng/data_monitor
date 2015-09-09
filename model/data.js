var Redis = require('../lib/redis').Redis;
exports.Data = {
    "hgets": function(key,fields) {
        var conn = Redis.connect('127.0.0.1',6379);
        var list = [];
        conn.hgets(key,fields,function(err, rows) {
            list = rows;
        })
        conn.quit();
        return list;
    }
}