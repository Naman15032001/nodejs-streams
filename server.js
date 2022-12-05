const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url !== '/') {
        return res.end();
    }

    // //downloading big file bad way

    // // const file = fs.readFileSync('sample.txt');

    // // return res.end(file);

    // //downloading big file good way

    // const readableStream = fs.createReadStream('sample.txt');

    // //readablestream --> writablestream

    // //req->readable stream

    // //res->writable stream

    // readableStream.pipe(res);

    //copy big file bad way


    //copy big file good way 

    // const readStream = fs.createReadStream('sample.txt');

    // const writeStream = fs.createWriteStream('output.txt');

    // readStream.on('data', (chunk) => {
    //     //console.log('Chunk', chunk);
    //     console.log('Chunk', chunk.toString());
    //     writeStream.write(chunk);
    // })


    res.end();

})

const PORT = process.env.PORT || 5700;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})