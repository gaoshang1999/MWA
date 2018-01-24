var express = require('express');
var router = express.Router();
var logger = require('morgan');
var mongo = require('mongoskin');


var db = mongo.db("mongodb://localhost:27017/test", {native_parser:true});
var col = 'location';

let ok = {status:"ok"};




/* GET users listing. */
router.get('/', function(req, res, next) {
  db.collection(col).find().toArray(function(err, result) {
    if (err) return console.log(err)
    console.log(result)
    res.send(result);
 })
});

router.get('/:id([0-9a-f]{24})', function(req, res, next) {
  console.log(req.params.id)
  db.collection(col).findOne({_id:req.params.id }, function(err, result) {
    if (err) return console.log(err)
    console.log(result)
    res.send(result);
 })
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  db.collection(col).insert(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.send(ok);
  })
});

router.put('/:id([0-9a-f]{24})', function(req, res, next) {
  console.log(req.params.id)
  console.log(req.body)
  db.collection(col).update({_id: req.params.id}, req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('update to database')
    res.send(ok);
  })
});

router.delete('/:id([0-9a-f]{24})', function(req, res, next) {
  console.log(req.params.id)
  db.collection(col).remove({_id: req.params.id}, function(err, result) {
      if (err) throw err;
      console.log("1 document deleted");
      res.send(ok);
    });
});

//db.location.createIndex({loaction:'2d'});
router.get('/:nearest3', function(req, res, next) {
  let mumLoc = [-91.9612747, 41.0132949]   
  var cursor = db.collection(col).find({location:{$near:mumLoc}});
  cursor.limit(3);
  cursor.toArray(function(err, result) {
    if (err) return console.log(err)     
    res.json(result);
    res.end()
  })
 
});


module.exports = router;

