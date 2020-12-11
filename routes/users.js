var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* /users  */
router.get('/', usersController.getUsers);
router.get('/add', usersController.displayAddUserForm)
router.post('/add', usersController.addUser)

module.exports = router;
