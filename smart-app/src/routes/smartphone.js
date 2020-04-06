const express = require('express');
const router = express.Router();

const smartphone = require('../controllers/smartphone.js');

router.get('/smartphones', smartphone.getAll);
router.get('/smartphones/:id', smartphone.one);
router.post('/smartphones/create', smartphone.create);

module.exports = router;