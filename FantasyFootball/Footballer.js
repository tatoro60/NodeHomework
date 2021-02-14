class Footballer{
    constructor(firstName,lastName,age,currentTeam,games) {
        this.firstName = firstName,
        this.lastName  = lastName,
        this.age = age,
        this.currentTeam = currentTeam,
        this.games = games
    }
    printFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

}
module.exports = Footballer