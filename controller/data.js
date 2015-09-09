exports.Data = {
    "index" : function(req, res) {
        var data=[];
        var times=[
            0,1,2,3,4,5,6,7,8,9
        ];
        for(var i=0;i<=2160;i++) {
            var stimestamp = new Date(2012, 06, 15, 0,0,0).getTime();
            var skip = i*10*1000;

            data.push({ x: stimestamp+skip, y: i/100});
        }
        res.json(data);
    }
}