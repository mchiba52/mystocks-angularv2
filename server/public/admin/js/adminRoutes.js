var express = require('express');
var adminRouter = express.Router();

var adminRouteFunc = function (nav) {
  var adminPage = 'index.html';
  adminRouter.route('/admin')
    .get(function(req, res) {
      res.send('nothing yet!');
    });
    return adminRouter;
};

module.exports = adminRouteFunc;
