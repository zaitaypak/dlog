const express = require('express');
const gxController = require('../app/controllers/gxController');
const router = express.Router();

router.get('/', gxController.index);
module.exports = router;
