var fs = require('fs');
var fileName = 'sum.txt';

fs.readFile('sum.txt', 'utf8', function(err, contentFile) {  
    if (err) throw err;
    var aNumbers = contentFile.split(' ').map(function(num){
            return parseInt(num)
        }
    );
    var total = aNumbers.reduce(function(acc, currentNumber){
        return acc + currentNumber;
    });
    console.log('The result of sum all numbers is: ' + total);
});