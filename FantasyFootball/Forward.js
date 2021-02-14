const Footballer = require('./Footballer');
class Forward extends Footballer{
    constructor(firstName,lastName,age,currentTeam,goals,games) {
        super(firstName,lastName,age,currentTeam,games)
        this.goals = goals
    }
    getGoalsEachGame(){
        return this.game === 0? 0:this.goals/this.games;
    }
}
