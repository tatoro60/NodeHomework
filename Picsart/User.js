const Visitor = require('./Visitor');

function User(username, age, arrayOfFollowers = [], arrayOfFollowing = []) {
    Visitor.call(this, username)
    this.age = age,
        this.arrayOfFollowers = arrayOfFollowers,
        this.arrayOfFollowing = arrayOfFollowing
}
User.prototype.printFollowing = function () {
    this.arrayOfFollowing.forEach(user => console.log(user));
}
User.prototype.addFollowing = function (user) {
    this.arrayOfFollowing.push(user);
}
User.prototype = Object.create(Visitor.prototype);
User.prototype.constructor = User;
module.exports = User;