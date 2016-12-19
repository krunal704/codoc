var mongoose = require('mongoose');

//schema
var fitnessSchema = new mongoose.Schema({
	"user":{type:mongoose.Schema.ObjectId,ref:'user'}
})

module.exports = mongoose.model('UserFitness',fitnessSchema);