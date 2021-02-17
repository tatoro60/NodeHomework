const fs = require('fs');

const myObj = JSON.parse(fs.readFileSync('1-json.json').toString());
myObj.name = "Sasha";
myObj.age = 19;
fs.writeFileSync('1-json.json', JSON.stringify(myObj));