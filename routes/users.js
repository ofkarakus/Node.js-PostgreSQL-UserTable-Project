var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* /users  */
router.get('/', usersController.getUsers);

module.exports = router;
