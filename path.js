const fs = require('fs');
// Function to get current filenames 
// in directory 
function makeObjectStructureByPath(path, obj) {
    fs.readdir(path, (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                if (file.endsWith(".txt")) {
                    obj[file.toString()] = true;
                } else {
                    obj[file] = {};
                    makeObjectStructureByPath(path + "\\" + file, obj[file]);
                }
            })
        }
    })
}
let obj1 = {};
makeObjectStructureByPath("main", obj1)

setTimeout(() => console.log(obj1), 5000)
const fs = require('fs');


function mapper(path) {
    let obj = {}

    function resolver(path, obj) {
        fs.readdirSync(path).forEach(file => {
            if (file.endsWith('.txt')) {
                obj[file] = true;
            } else {
                obj[file] = {};
                resolver(`${path}/${file}`, obj[file]);
            }
        })
    }
    resolver(path, obj);
    return obj;
}

console.log(mapper("main"))