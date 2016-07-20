var express = require('express');
var dataRouter = express.Router();
var mongoClient = require('mongodb').MongoClient, assert = require('assert');

var dataRouteFunc = function (nav) {

  dataRouter.route('/data/:id')
    .get(function(req, res) {
      var url =
      'mongodb://localhost:27017/stocksApp';
      mongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var collection = db.collection('stocks_data');
        collection.aggregate([
          {$match: {'stocks_id': Number(req.params.id)}},
          {$project:
            {
              _id:0,
              stocks_id:1,
              last: {$arrayElemAt: ['$stocks_history', -1]} }}
          ], function (err, results) {
          assert.equal(null, err);
          res.send(results);
          db.close();
        });

      });
    });

    dataRouter.route('/data/history/:id/:period')
      .get(function(req, res) {
        var d = new Date();
        var currentMSec = d.getTime();
        var url =
        'mongodb://localhost:27017/stocksApp';
        var milliperiod = 0;
        var msecDay = 86400000;

        if (req.params.period === 'Day') {
          milliperiod = currentMSec - (msecDay);
        } else if (req.params.period === 'Week') {
          milliperiod = currentMSec - (7 * msecDay);
        } else if (req.params.period === 'Month') {
          milliperiod = currentMSec - (30 * msecDay);
        } else if (req.params.period === 'Year') {
          milliperiod = currentMSec - (365 * msecDay);
        }

        mongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          var collection = db.collection('stocks_data');
          collection.aggregate([
            //match criteria
            {$match : {'stocks_id': Number(req.params.id)}},
            //unwind the sensor_history into multiple documents
            {$unwind: '$stocks_history'},
            //sort correctly
            {$sort: {'stocks_history': 1}},
            //match the sub array
            {$match: {'stocks_history.0': {$gt: +Number(milliperiod)}}},
          ], function (err, results) {
            assert.equal(null, err);
            res.send(results);
            db.close();
          });

        });
      });
    return dataRouter;
};

module.exports = dataRouteFunc;
