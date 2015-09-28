'use strict';

var _ = require('lodash');
var checkFizzbazz = function(no){
  if (no % 3 === 0){
    return 'fizz';
  }else if(no % 5 === 0){
    return 'bazz';
  }else{
    return 'no';
  }
};
var data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  .map(function (no){
    return {
      no: no,
      name: 'event' + no,
      detail: 'the event no ' + no,
      tag : checkFizzbazz(no)
    };
  });

// Get list of eventss
exports.index = function(req, res) {
  res.json({
    data:data
  });
};

exports.search = function(req, res) {
  console.log('search', req.params.eventId );
  res.json({
    data:data.filter(function(event){
      return parseInt(event.no) === parseInt(req.params.eventId);
    })
  });
};

exports.create = function(req, res) {
  console.log('create', req.body );
  data.push((function(){
      var no = data.length+1;
      return {
        no: no,
        name: req.body.name,
        detail: req.body.detail,
        tag : checkFizzbazz(no)
      }
    })());
  res.send(200);
};
