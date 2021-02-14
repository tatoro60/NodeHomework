const User = require('./User');

function CommonAccount(username, age, arrayOfFollowers = [], arrayOfFollowing = []) {
    User.call(this, username, age, arrayOfFollowers = [], arrayOfFollowing = [])
}
CommonAccount.prototype = Object.create(User.prototype);
CommonAccount.prototype.constructor = CommonAccount;

module.exports = CommonAccount;