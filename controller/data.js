exports.Data = {
    "index" : function(req, res) {
        var data1=[];
        for(var i=0;i<=2160;i++) {
            var stimestamp = new Date(2012, 06, 15, 21,25,0).getTime();
            var skip = i*10*1000;

            data1.push({ x: stimestamp+skip, y: i/100});
        }

        var data2=[];
        for(var i=0;i<=2160;i++) {
            var stimestamp = new Date(2012, 06, 15, 21,25,0).getTime();
            var skip = i*10*1000;

            data2.push({ x: stimestamp+skip, y: i/100+1});
        }
        res.json([data1,data2]);
    },
    "cpu" : function(req, res) {
        var data=[];
        for(var i=0;i<=2160;i++) {
            var stimestamp = new Date(2012, 06, 15, 21,25,0).getTime();
            var skip = i*10*1000;

            data.push({ x: stimestamp+skip, y: i/100+1});
        }
        res.json(data);
    }
}