var express = require('express');
var router = express.Router();
var logger = require('morgan');
var mongo = require('mongoskin');

class Location{
  constructor(name, category, lng, lat){
    this.name = name;
    this.category = category;
    this.lng = lng;
    this.lat = lat;
  }
}

var db = mongo.db("mongodb://localhost:27017/test", {native_parser:true});
var col = 'location';

let ok = {status:"ok"};




/* GET users listing. */
router.get('/', function(req, res, next) {
  db.collection(col).find().toArray(function(err, results) {
    if (err) return console.log(err)
    console.log(results)
    res.send(results);
 })
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  db.collection(col).findOne({ _id:req.params.id }, function(err, results) {
    if (err) return console.log(err)
    console.log(results)
    res.send(results);
 })
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  db.collection(col).save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.send(results);
  })
});

router.put('/:id', function(req, res, next) {
  console.log(req.body)
  db.collection(col).save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

router.delete('/:id', function(req, res, next) {
  dbo.collection(col).deleteOne(req.params.id, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
});

module.exports = router;

