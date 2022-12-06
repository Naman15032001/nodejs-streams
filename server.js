const http = require('http');
const fs = require('fs');
const {
    Transform,
    pipeline
} = require('stream')

const {
    wordpStream
} = require('./upperCseWordProcessor')

const {
    transformStream
} = require('./replaceWordProcessor')

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


    //string processing / audio processing / vidro processing

    //neex to upercase sample.txt ipsum change word // bad words filter

    const sampleFileStream = fs.createReadStream('sample.txt');

    const outputWritableStream = fs.createWriteStream('output1.txt');

    // sampleFileStream.on('data', (chunk) => {
    //     console.log('data recieved ', chunk.toString());

    //     //process

    //     const tempString = chunk.toString().toUpperCase();

    //     const finalString = tempString.replaceAll(/ipsum/gi, 'cool');

    //     //writable stream write

    //     outputWritableStream.write(finalString);

    //     // const transformStream = new Transform({
    //     //     transform(chunk, encoding, callback) {
    //     //         console.log('chunk', chunk.toString());
    //     //     }
    //     // })

    //     //writable stream write
    // })

    // const transformStream = new Transform({
    //     transform(chunk, encoding, callback) {

    //         const tempString = chunk.toString().toUpperCase();
    //         const finalString = tempString.replaceAll(/ipsum/gi, 'cool');
    //         callback(null, finalString);
    //         //console.log('chunk', chunk.toString());
    //     }
    // })

    // sampleFileStream.pipe(transformStream).pipe(outputWritableStream);

    // //left side redable stream // right side writsanble transform both readble writable

    // /*sampleFileStream
    // .pipe(transformStream)
    // .on('error',(err)=>{
    //     console.log(err);
    // })
    // .pipe(wordpStream)
    // .on('error',(err)=>{
    //     console.log(err);
    // })
    // .pipe(outputWritableStream)
    // .on('error',(err)=>{
    //     console.log(err);
    // });*/

    // pipeline(sampleFileStream, transformStream, wordpStream, outputWritableStream, (error) => {

    //     if (error) {
    //         console.log('error handled', error);
    //     }
    // })


    res.end();

})

const PORT = process.env.PORT || 5700;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})