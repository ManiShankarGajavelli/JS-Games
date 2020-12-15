const fs = require('fs');

fs.readFile('hello.txt', 'utf8', function (err, data) {
    fs.writeFile('writeMe.txt', data, function(err, result) {
       if(err) console.log('error', err);
     });
   });
// const txt = readFile('./hello.txt','utf8');
// console.log(txt);
console.log('Hello World 👋' );