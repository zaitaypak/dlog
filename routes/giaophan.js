const express = require('express');
const gpController = require('../app/controllers/gpController');
const router = express.Router();

router.get('/', gpController.index);
module.exports = router;
