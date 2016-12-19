var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
	"FirstName":String,
	"LastName":String,
	"gender":String
})

module.exports = mongoose.model('user',userSchema);