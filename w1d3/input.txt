'use strict';

const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');


const gunzip =zlib.createGunzip()


inp.pipe(gzip).pipe(out).on('finish', function(){
  const inp2 = fs.createReadStream('input.txt.gz');
  const out2 = fs.createWriteStream('input2.txt');
  inp2.pipe(gunzip).pipe(out2);

});




