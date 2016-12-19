//Dependancies
var express = require('express');
var router = express.Router();

//models
var user = require('../models/user')
//router

router.get('/index',function(req,res){
	var newUser = new user({
		"FirstName":"Akshar",
		"LastName":"Mistry",
		"gender":"Male"
	})
	newUser.save(function(err,result){
		if(!err){
			console.log("added");
			user.find({},function(err,result){
				res.json(result);
			})
		}
	})
})


module.exports = router;
