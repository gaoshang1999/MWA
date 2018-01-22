var express = require('express');
var router = express.Router();
var logger = require('morgan');
const { check, validationResult } = require('express-validator/check');

class Grade{
  constructor(id, name, course, grade){
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
  }
}

let all_grades = [];
let ok = {status:"ok"};

function insertItem(req){
  let g = req.body[0]
  let p = new Grade(g.id, g.name, g.course, g.grade);
  all_grades.push(p);
}

function deleteItem(id){
  for (let index in all_grades){
    if (all_grades[index].id == id){
       all_grades.splice(index, 1)
       break;
    }
  }
}

function getItem(id){
  for (let index in all_grades){
    if (all_grades[index].id == id){
       return all_grades[index];
    }
  }
}



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({status:"ok", data: all_grades});
});

router.get('/:id', function(req, res, next) {
  let g = getItem(req.params.id);
  if(g){
    res.send({status:"ok", data: g});
  } else {
    res.send({status:"error", message:"Not Found."});
  }
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  check('id').exists().withMessage('id is required');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }else{
    insertItem(req)
    res.send(ok);
  }
});

router.put('/:id', function(req, res, next) {
  deleteItem(req.params.id);
  check('id').exists().withMessage('id is required');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }else{
    insertItem(req)
    res.send(ok);
  }
});

router.delete('/:id', function(req, res, next) {
  deleteItem(req.params.id);
  res.send(ok);
});

module.exports = router;

