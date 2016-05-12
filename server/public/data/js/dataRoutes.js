var express = require('express');
var dataRouter = express.Router();
var mongoClient = require('mongodb').MongoClient, assert = require('assert');

var dataRouteFunc = function (nav) {

  dataRouter.route('/data/:id')
    .get(function(req, res) {
      var url =
      'mongodb://localhost:27017/monitorApp';
      mongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var collection = db.collection('sensor_data');
        collection.findOne({'sensor_id': Number(req.params.id)}, {fields: {sensor_history: 1}}, function (err, results) {
          assert.equal(null, err);
          res.send('Results ' + JSON.stringify(results.sensor_history[results.sensor_history.length - 1]));
          db.close();
        });

      });
    });
    return dataRouter;
};

module.exports = dataRouteFunc;
