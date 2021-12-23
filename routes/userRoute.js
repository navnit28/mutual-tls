const express = require('express');
const router = express.Router();
const {getRandomUser} = require('../controllers/userController');
router.route('/user').get(getRandomUser);
module.exports = router;