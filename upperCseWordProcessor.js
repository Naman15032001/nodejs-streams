const {
    Transform
} = require('stream')

const wordpStream = new Transform({
    transform(chunk, encoding, callback) {

        const tempString = chunk.toString().toUpperCase();
        const finalString = tempString.replaceAll(/ipsum/gi, 'cool');
        callback(null, finalString);
        //console.log('chunk', chunk.toString());
    }
});

module.exports = {
    wordpStream
};