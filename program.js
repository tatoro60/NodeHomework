const Movie = require("./movieModul");
const fs = require("fs");
const EventEmitter = require("events");
const event = new EventEmitter();
fs.readFile("C:\\Users\\Admin\\Desktop\\movies.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        makeMovieObjectByData(data)
    }
})
let bigData = [];

function makeMovieObjectByData(str) {
    let arrayOfMovies = str.split("\r\n");
    arrayOfMovies.map((item) => item.substring(item.indexOf(".") + 1)).forEach(element => {
        let arr = element.split("-");
        let arr2 = arr[0].split("(");
        bigData.push(new Movie(arr2[0], Number.parseInt(arr2[1]), arr[1]))
    });
    event.emit("writeToFile")
}
event.on("writeToFile", function () {
    bigData.forEach((item, index) => {
        fs.appendFile("C:\\Users\\Admin\\Desktop\\movieJSON.txt", JSON.stringify(item) + "\n", err => {
            if (err) {
                console.log(err);
            }

        })
    })
})