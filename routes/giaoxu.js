const express = require('express');
const gxController = require('../app/controllers/gxController');
const router = express.Router();

router.use('/', gxController.index);
module.exports = router;
