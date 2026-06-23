const express = require('express');

const router = express.Router();

const userController =
    require('../controllers/UserController');

router.post(
    '/users',
    userController.create
);

router.get(
    '/users',
    userController.findAll
);

router.post(
    '/login',
    userController.login
);

module.exports = router;