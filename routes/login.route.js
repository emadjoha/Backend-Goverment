let loginModel = require('../models/login.model');
exports.route = function (app) {
    console.log("ASDAsd");
    app.route('/login').post(loginModel.login);
    app.route('/logout').get(loginModel.logout);
}