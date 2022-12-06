const {
    Readable,
    Writable
} = require('stream');

const readableStream = new Readable({
    objectMode: true,
    highWaterMark: 2, //threshold 2bytes  default around 64kb
    read() {

    }
});

// const writableStream = Writable({
//     write(s) {
//         //shorthand fn

//         console.log('writing', s.toString());
//     }
// })



// //writableStream.write('hello')

readableStream.on('data', (chunk) => {
    console.log('Data coming:', chunk)
   // writableStream.write(chunk)
})

// readableStream.push('fghdhd gfhgdsr mnn,nmnmnmnmnmn mnmnmn')

readableStream.push({
    naman: 'helloo'
})

// console.log(readableStream.push('fghdhd gfhgdsr mnn,nmnmnmnmnmn mnmnmn')) //true or false for threshold

// //can pause for sometime if exceeds so optmised way