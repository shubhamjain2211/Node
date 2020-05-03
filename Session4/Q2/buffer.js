const buf = Buffer.alloc(12);
console.log(buf);

buf.fill('Shubham Jain');
console.log('buffer filled with:',buf);
console.log('converted to string as:',buf.toString());

