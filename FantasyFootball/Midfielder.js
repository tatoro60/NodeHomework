const Footballer = require('./Footballer');
class Midfielder extends Footballer{
    constructor(firstName,lastName,age,currentTeam,assists,games) {
        super(firstName,lastName,age,currentTeam,games)
        this.assists = assists
    }
    getAssistsEachGame(){
        return this.games === 0? 0:this.assists/this.games;
    }
}
