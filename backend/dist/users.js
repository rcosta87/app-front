"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, email, name, password) {
        this.userName = userName;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined
            && another.userName === this.userName
            && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "admin": new User('admin', 'admin@email.com', 'Admin', 'admin1234'),
    "person": new User('person', 'person@email.com', 'Person', 'user123'),
    "rhada": new User('rhada', 'rhadacosta@gmail.com', 'Rhada', 'r1234'),
    "paulo": new User('paulo', 'paulo@email.com', 'Paulo', 'paulo1234')
};
