var mongoose = require('mongoose');

//schema
var reportSchema = new mongoose.Schema({
	"userid":String,
	"image":String,
	"comments":String
})

module.exports = mongoose.model('reports',reportSchema);