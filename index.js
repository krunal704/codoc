//loading dependancies
var express = require('express');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database

mongoose.connect("mongodb://mistryakshar54:aks1611947@ds139448.mlab.com:39448/codoc");

//initialize express server
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(logger('dev'));

//start server
app.listen(8080);
console.log("server is running on port 8080");



app.use("/webuser/login",require("./routes/auth"));
// res.writeHead(301,{
// 		"Location":"localhost:1234/index.html"
// 	});
// 	res.end()
// 	res.redirect('localhost:1234/index.html');
// 	res.send('index.html');

//routes
// app.use("/",function(req,res){
//
// 	res.send("Wel-come to codoc technology");
// })
// app.use("admin",function(req,res){
// 	console.log(req.body.uname);
// 	res.send(req.body.uname);
// })

//start server
app.listen(1234);
console.log("server is running on port 1234");



app.use("/admin/login",require("./routes/auth"));

app.use(express.static(__dirname+'/Shamcey/'));
