
const os = require('os')

const checkSystem = function(){
    console.log('Checking your system...');
    
    let success = true;
    if (os.totalmem()  < 4 * Math.pow(2, 30) ){
        success = false;
        console.log('The app need at least 4GB of RAM');
    }
    
    if (os.cpus().length < 2 ){
        success = false;
        console.log('Processor is not support');
    }

    if (success){
        console.log('System is checked successfully.');
    }   
}

checkSystem();
console.log('------------------------------------------');

//Rewrite by using Observable
const Rx = require('@reactivex/rxjs');

const subject = new Rx.Subject();
let success = true;

function check(e) {
   if (e.type === "start"){   
        console.log('Checking your system...');
   }

   if (e.type === "mem" && e.value){   
        success = false;   
        console.log('The app need at least 4GB of RAM');
   } else if (e.type === "cpu" && e.value){
        success = false;
        console.log('Processor is not support');
   }
}


function finish(){
    if (success){
        console.log('System is checked successfully.');
    }  
}

subject.subscribe(check, null, finish);

subject.next({type:"start"});
subject.next({type:"mem", value : os.totalmem()  < 4 * Math.pow(2, 30) });
subject.next({type:"cpu", value : os.cpus().length < 2 });

subject.complete();

