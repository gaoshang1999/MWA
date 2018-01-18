const Rx = require('@reactivex/rxjs');
const url = require('url');
const {fork} = require('child_process')

const subject = new Rx.Subject();

function sendFile(e) {
    console.log(e.req.url);
    const u = url.parse(`http://${e.req.url}`, true);
    console.log(u.query.url);
       
    const child = fork('file_read.js');

    if(u.query.url) {
        child.send(u.query.url);

        child.on('message', (data)=>{
            if (data === '____END____'){
                e.res.end();
            }else{
                e.res.write(data);
            }        
        });
    }
}

subject.subscribe(sendFile);


const http = require('http')
http.createServer((req, res)=>{
    subject.next({req:req, res:res});
}).listen(4000);