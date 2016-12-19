var express = require('express');
var router = express.Router();

router.get('/validate/:uname/:password',function(req,res){
console.log("The request  in validate tagid: "+req.params.uname+" "+req.params.password);
if( req.params.uname == "admin" && req.params.password == "admin")
{
    res.send("1");

}
else {
  res.send("0");
}

});

module.exports = router;
