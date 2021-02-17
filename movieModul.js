class Movie {
    constructor(name, year, language) {
        this.name = name;
        this.year = year;
        this.language = language;
    }
    writeToFileFormat() {
        return `${this.name}-${this.year}-${this.language}\r\n`
    }
}
module.exports = Movie;