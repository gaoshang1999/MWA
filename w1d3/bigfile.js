const http = require('http');
const fs = require('fs');

const file = './big.file';


// Create an HTTP tunneling proxy
const server = http.createServer((req, res) => {
    // fs.readFile(file, (err, data) => {
    // if (err) throw err;  
    //    res.end(data);
    // });

    const src = fs.createReadStream(file);
    src.pipe(res);

}).listen(3333);