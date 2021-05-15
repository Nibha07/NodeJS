var fs = require ('fs');
var nameFile = 'fie3.txt';
var textToWrite = 'hellooo my name is nibha';


fs.readFile(nameFile, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    console.log(contentFile);
});

fs.writeFile(nameFile, textToWrite, function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});


