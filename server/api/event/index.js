'use strict';

var express = require('express');
var controller = require('./event.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:eventId', controller.search);
router.post('/', controller.create);

module.exports = router;
