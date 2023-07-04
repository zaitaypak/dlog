const express = require('express');
const siteController = require('../app/controllers/siteController');
const router = express.Router();

router.use('/', siteController.index);
module.exports = router;
