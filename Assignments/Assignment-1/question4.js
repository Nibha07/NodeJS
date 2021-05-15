 const fs = require('fs');

const data = "hey..!ho let's go";

fs.writeFile('file.txt', data, (err) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log("Data has been written to file successfully.");
});