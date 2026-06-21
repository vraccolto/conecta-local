const express = require('express');

const router = express.Router();

const adController =
    require('../controllers/AdController');

router.post(
    '/ads',
    adController.create
);

router.get(
    '/ads',
    adController.findAll
);

module.exports = router;