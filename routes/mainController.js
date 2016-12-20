var router = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var Image = require('../models/image');

router.get('/', function(req, res) {
	res.send('index.html');
});

router.post('/add', upload.single('image'), function(req, res) {

	var image = new Image({
		path: req.file.path,
		name: req.body.fname,
		gender: req.body.gender,
		age: req.body.gender,
		notes: req.body.notes
	});

	image.save().then(function(response) {

		var image = "<img src=" + req.file.path + " />";
		var name = "<h1>" + req.body.name + "</h1>";
		var html = "<div class='text-center'>" + image + name + "</div>";

		res.send(html);

	}).catch(function(err) {
		console.log(err);
		res.send("<h1>Something went wrong</h1>")
	});

});




router.get('/display',function(req,res){
  Image.find({}, function (err, result) {
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


module.exports = router;