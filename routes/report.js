//Dependancies
var express = require('express');
var router = express.Router();

//models
// var user = require('../models/user')
var report= require('../models/report')






router.post('/addreport',function(req,res){
  // console.log("reached to add functionality!!");
  // console.log("l;amsc;lasc: "+req.body.fname);
  var reportinfo = new report({
      "userid":req.body.uid,
      "image":req.body.image,
      "comments":req.body.comment
  })
  report.save(function(err,result){
    console.log("Came to sace");
    if(!err){
      		console.log("added");
      }
      else{
        	console.log(err);
      }
  })
});



router.get('/getreports/:uid',function(req,res){

  report.findOne({"user_id":req.params.uid}, function (err, result) {
    if(result)
    {
        console.log(result);
        res.send(result);
        console.log("report DISPLAY");
    }
    else {
              console.log("NO AVAILABLE");
    }
  });
});



// //router
// router.post('/add',function(req,res){

// 	console.log("reached to add functionality!!");
// 	console.log("l;amsc;lasc: "+req.body.fname);

// 	var user_info = new user({
// 			"firstName":req.body.fname,
// 			"email":req.body.email,
// 			"password":req.body.pass,
// 			"gender":req.body.gender,
// 			"age":req.body.age,
// 			"notes":req.body.height
// 	})
// 	user_info.save(function(err,result)
// 		console.log("Came to sace");
// 		if(!err){
// 			console.log("added");
      
// 			}
// 			else{
// 				console.log(err);
// 			}
// 	})
// });


module.exports = router;
