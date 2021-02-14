const Footballer = require('./Footballer');
class Goalkeeper extends Footballer{
    constructor(firstName,lastName,age,currentTeam,saves,games) {
        super(firstName,lastName,age,currentTeam,games)
        this.saves = saves
    }
    getSavesEachGame(){
        return this.game === 0? 0:this.saves/this.games;
    }
}