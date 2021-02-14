const User = require('./User');
function GoldAccount (username, age, arrayOfFollowers = [], arrayOfFollowing = []){
    User.call(this,username, age, arrayOfFollowers = [], arrayOfFollowing = [])
}
GoldAccount.prototype.printFollowers = function () {
    this.arrayOfFollowers.forEach(user => console.log(user));
}
User.prototype.addFollowers = function (user) {
    this.arrayOfFollowers.push(user);
}
GoldAccount.prototype = Object.create(User.prototype);
GoldAccount.prototype.constructor = GoldAccount;
module.exports = GoldAccount;
