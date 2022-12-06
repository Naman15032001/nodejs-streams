const {
    Transform
} = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        transformStream.emit('error', new Error('Something went wrong'))
        const tempString = chunk.toString().toUpperCase();
        const finalString = tempString.replaceAll(/ipsum/gi, 'cool');
        callback(null, finalString);
        //console.log('chunk', chunk.toString());
    }
});

module.exports = {
    transformStream
};