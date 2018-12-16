let userModel = require('../models/user.model');
exports.route = function (app) {
    app.route('/user').get(userModel.findOne);
    app.route('/allusers').get(userModel.findAll);
    app.route('/editRoles').post(userModel.editOne);
}