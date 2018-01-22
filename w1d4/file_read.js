const fs = require('fs');


// const read_file = function(f){
//     var contents = fs.readFileSync(f, 'utf8');
//     return contents;
// }

// process.on('message', (msg) => {
//     const contents = read_file(msg);
//     process.send(contents);
// });


process.on('message', (msg) => {
    var readStream = fs.createReadStream(msg, 'utf8');

    readStream.on('data', function(chunk) {  
        process.send(chunk);
    }).on('end', function() {
        process.send('____END____');
    });

});