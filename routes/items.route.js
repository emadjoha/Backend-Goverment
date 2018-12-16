let itemsModel = require('../models/items.model');
exports.route = function (app) {
      app.route('/emad').get(itemsModel.findOne);
      app.route('/all').get(itemsModel.findAll);
      app.route('/addAnewForms').post(itemsModel.addOne);
      app.route('/approval').get(itemsModel.findapproval);
      app.route('/reject').get(itemsModel.findReject);
      app.route('/notappArej').get(itemsModel.findNotAppARej);
      app.route('/editReqApp').put(itemsModel.updateapp);
      app.route('/editReqRej').put(itemsModel.updaterej);
      app.route('/editReqStudy').put(itemsModel.updateStudy);
      app.route('/atStudy').get(itemsModel.findstudy);
      app.route('/finished').get(itemsModel.finished);
}