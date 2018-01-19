var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

const url = 'http://jsonplaceholder.typicode.com/users/';
/* GET users listing. */
router.get('/', function(req, res, next) {

//method 1 : use Promise
  // fetch(url)
  //   .then(res => res.json())
  //   .then(json  => res.render('users', { users: json }));

//method 2 : use Observables
  // const subject = new Rx.Subject();
  // subject.subscribe((json)=>{
  //    res.render('users', { users: json })
  // });
  
  // fetch(url)
  //   .then(res => res.json())
  //   .then(json  => subject.next(json) );

//method 3 : use Async/Await
  (async function () {
    const rs = await fetch(url);
    const json = await rs.json();
    res.render('users', { users: json })
  })();


});

module.exports = router;
