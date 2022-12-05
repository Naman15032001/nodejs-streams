const {
    Readable
} = require('stream');

const readableStream = new Readable({
    highWaterMark: 2, //threshold 2bytes  
    read() {

    }
});

readableStream.on('data', (chunk) => {
    console.log('Data coming:', chunk)
})

//readableStream.push('fghdhd gfhgdsr mnn,nmnmnmnmnmn mnmnmn')

console.log(readableStream.push('fghdhd gfhgdsr mnn,nmnmnmnmnmn mnmnmn')) //true or false for threshold

//can pause for sometime if exceeds so optmised way