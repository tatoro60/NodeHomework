const fs = require('fs');
const reg = /^[A-Z0-9]+=[A-Z0-9]+/ig
fs.readFileSync('./.env','utf8').split('\n').forEach((item)=>{
    if(item.match(reg)){
        let arr = item.split('=');
        process.env[arr[0]] = arr[1];
    }
})