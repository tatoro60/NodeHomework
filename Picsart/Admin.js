const Visitor = require('./Visitor');
function Admin(username) {
    Visitor.call(this,username)

}
Admin.prototype.printAllUsers = function () {
    console.log('Users....');
}
Admin.prototype = Object.create(Visitor.prototype);
Admin.prototype.constructor = Admin;
module.exports = Admin