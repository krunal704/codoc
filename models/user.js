var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
	"firstName":String,
	"email":String,
	"password":String,
	"gender":String,
	"age":Number,
	"usertype":Number,
	"notes":String
})

module.exports = mongoose.model('users',userSchema);