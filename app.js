var express=require("express");
var app=express();
var request = require('request');

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("form1.ejs");
});

app.get("/movies", function(req,res){
    var data=req.query.data;
    request('https://api.themoviedb.org/3/search/movie?query=' + data +'&api_key=68a75e548b6b3e42d07e25614e76df7f', function (error, response, body) {
    if(!error && response.statusCode==200){
        var result=JSON.parse(body);
        res.render("result.ejs",{result:result});  
    } 
});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});