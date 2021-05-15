var fs = require('fs');

var readMe =fs.readFileSync(__dirname + '/readMe.txt','utf8');

console.log(readMe);