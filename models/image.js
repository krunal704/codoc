var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({

	path: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	age: {
		type: String,
		required: true
	},
	comments: {
		type: String
	},
	notes:{
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Image', imageSchema);