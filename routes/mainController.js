var router = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: 'Shamcey/uploads/' });
var Image = require('../models/image');

router.get('/', function(req, res) {
	res.send('index.html');
});

router.post('/add', upload.single('image'), function(req, res) {
  //  alert(req.file.url);
  console.log(req.body.url);
	var image = new Image({
		path: req.file.filename,
		name: req.body.fname,
		gender: req.body.gender,
		age: req.body.gender,
		 notes: req.body.notes,
		 comments:null

	});

image.save(function(err,result){
        if(!err){
            console.log("added");
          res.redirect('../../add_report.html');

            }
            else{
                res.send(err);
            }
    });


	// image.save().then(function(response) {

	// 	var image = "<img src=" +'/uploads/' +req.file.filename + " />";
	// 	var name = "<h1>" + req.body.fname + "</h1>";
	// 	var html = "<div class='text-center'>" + image + name + "</div>";

	// 	res.send(html);

	// }).catch(function(err) {
	// 	console.log(err);
	// 	res.send("<h1>Something went wrong</h1>")
	// });

});


router.get('/searchreport/:rid',function(req,res){
  Image.findOne({"_id": req.params.rid}, function (err, result) {
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

router.post('/updatereport',function(req,res){
console.log(req.body.comment);
Image.findOneAndUpdate({"age": req.body.age,"gender":req.body.gender,"name":req.body.fname},{
      "comments":req.body.comment,
      "age": req.body.age,
      "gender":req.body.gender,
      "name":req.body.fname
}, function(err, res) {
  if (err) throw err;
    //  res.redirect('../../');
  //res.redirect('../');
  //res.send();
  console.log(req.body.fname);
});
console.log("The requested value has been updated!!");
res.redirect('../../doc_dashboard.html');
});



router.get('/userdisplay',function(req,res){
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