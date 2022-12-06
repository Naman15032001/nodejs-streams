const fs = require('fs');

// const writeStream = fs.createWriteStream('log.txt');

// //process.stdin.pipe(writeStream);

const readStream = fs.createReadStream('log.txt');

readStream.pipe(process.stdout)

//console.log internals

//npm packages // streams