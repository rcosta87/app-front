"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.userName];
        var token = jwt.sign({ sub: dbUser.userName, iss: 'meat-api' }, api_config_1.apiConfig.secret);
        resp.json({ name: dbUser.name, userName: dbUser.userName, email: dbUser.email, acessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados Inválidos!' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.userName];
    return dbUser !== undefined && dbUser.matches(user);
}
