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

app.use(express.static(__dirname+'/Shamcey/'));
