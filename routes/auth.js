var express = require('express');
var router = express.Router();
var user = require('../models/user')


// router.get('/validate/:uname/:pass',function(req,res){
// 	console.log(req.params.uname);
// 		console.log(req.params.pass);

//   user.findOne({"email":req.params.uname,"password":req.params.pass}, function (err, result) {
//     if(result)
//     {
//         console.log(result);
//         res.send(result);
//         console.log("USER DISPLAY");
//     }
//     else {
//               console.log("NO AVAILABLE");
//     }
//     console.log("hi");
//   });
// });



router.get('/validate/:email/:pwd',function(req,res){
	console.log(req.params.email);
user.findOne({ "email": req.params.email,"password":req.params.pwd}, function(err, result) {
  if (!err) {
	          if(result == null)
	          {
	           console.log('invalid id and passs');
	          }
	          else
	          {
	                  console.log(result);
	                  console.log(result);
	                  res.send(result);
	          } 
        }
        else
        {
              console.log('false');
        }
 });
});
module.exports = router;
