//loading dependancies
var express = require('express');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database

mongoose.connect("mongodb://jeetvirani:jeetvirani@ds139438.mlab.com:39438/codoc");


console.log(mongoose.connection.readyState);
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});
//initialize express server
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(logger('dev'));



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


app.use("/admin/login",require("./routes/auth"));

 app.use(express.static(__dirname+'/Shamcey/'));


var fs = require("fs");

var multer = require("multer");
var upload = multer({dest: "./uploads"});

var conn = mongoose.connection;

var gfs;

var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

conn.once("open", function(){
  gfs = Grid(conn.db);
  app.get("/upimg", function(req,res){
    //renders a multipart/form-data form
    res.render("home");
  });

  //second parameter is multer middleware.
  app.post("/", upload.single("avatar"), function(req, res, next){
    //create a gridfs-stream into which we pipe multer's temporary file saved in uploads. After which we delete multer's temp file.
    var writestream = gfs.createWriteStream({
      filename: req.file.originalname
    });
    //
    // //pipe multer's temp file /uploads/filename into the stream we created above. On end deletes the temporary file.
    fs.createReadStream("./uploads/" + req.file.filename)
      .on("end", function(){fs.unlink("./uploads/"+ req.file.filename, function(err){res.send("success")})})
        .on("err", function(){res.send("Error uploading image")})
          .pipe(writestream);
  });

  // sends the image we saved by filename.
  app.get("/:filename", function(req, res){
      var readstream = gfs.createReadStream({filename: req.params.filename});
      readstream.on("error", function(err){
        res.send("No image found with that title");
      });
      readstream.pipe(res);
  });

  //delete the image
  app.get("/delete/:filename", function(req, res){
    gfs.exist({filename: req.params.filename}, function(err, found){
      if(err) return res.send("Error occured");
      if(found){
        gfs.remove({filename: req.params.filename}, function(err){
          if(err) return res.send("Error occured");
          res.send("Image deleted!");
        });
      } else{
        res.send("No image found with that title");
      }
    });
  });
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(8080);
console.log("server is running on port 8080");
