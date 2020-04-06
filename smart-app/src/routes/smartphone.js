const express = require('express');
const router = express.Router();

const smartphone = require('../controllers/smartphone.js');

router.get('/smartphones', smartphone.getAll);

module.exports = router;