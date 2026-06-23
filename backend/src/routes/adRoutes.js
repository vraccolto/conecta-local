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

router.put(
    '/ads/:id',
    adController.update
);

router.delete(
    '/ads/:id',
    adController.delete
);

router.get(
    '/categories',
    adController.findCategories
);

module.exports = router;