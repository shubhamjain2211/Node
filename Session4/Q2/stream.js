const fs = require('fs');
let read = fs.createReadStream('./data.txt');

    read.on('data', (chunk) => {
    chunk += 'some random data from data.txt'
    console.log(chunk);
})
 
    read.on('open', () => {
    console.log('Stream open');
});

    read.on('end', () => {
    console.log('Stream Closed');

});
