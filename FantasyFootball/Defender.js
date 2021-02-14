const Footballer = require('./Footballer');
class Defender extends Footballer {
    constructor(firstName, lastName, age, currentTeam, tackles, games) {
        super(firstName, lastName, age, currentTeam, games)
        this.tackles = tackles
    }
    getTacklesEachGame() {
        console.log(this.tackles);
        console.log(this.games);
        return this.games === 0 ? 0 : this.tackles / this.games;
    }
}
