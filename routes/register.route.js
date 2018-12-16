let registerModel = require('../models/register.model');
exports.route = function (app) {
    app.route('/register').post(registerModel.register);
}