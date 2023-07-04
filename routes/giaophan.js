const express = require('express');
const gpController = require('../app/controllers/gpController');
const router = express.Router();

router.use('/', gpController.index);
module.exports = router;
