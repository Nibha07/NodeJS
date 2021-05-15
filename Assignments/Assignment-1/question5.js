var fs = require('fs');
var fileName = 'file2.txt'
var wordToFind = 'hello';


fs.readFile(fileName, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    var aWordsText = contentFile.toLowerCase().split(' ');
    var aFilteredWords = aWordsText.filter(function(word){
        return word.includes(wordToFind);
    })
    console.log('The word "' + wordToFind + '" appears ' + aFilteredWords.length + " times in the text.");
});