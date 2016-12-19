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
	console.log("came here"+req.params.email+req.params.pwd);

			user.findOne({ "email":req.params.email, "password":req.params.pwd } , function(err,result){
				if(err)
				{
					res.send(err);
				}
				else {
					if(result == null)
					{
						res.send("error");
					}
					else {
							res.send(result);
					}

				}

			})
		 console.log("lkascn");
});




module.exports = router;
